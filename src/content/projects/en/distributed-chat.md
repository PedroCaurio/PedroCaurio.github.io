---
title: distributed-chat
summary: A multi-user chat designed to run across several server instances. TCP sockets with one thread per client, Redis for state and pub/sub replication, and a local proxy with FastAPI and Server-Sent Events for the browser.
role: Co-author
order: 2
context: Academic distributed systems project
team:
  - { name: Pedro Caurio, url: https://github.com/PedroCaurio }
  - { name: Felipe Fagundes, url: https://github.com/FelipeFagundesCosta }
facts:
  - { label: Team, value: 2 people }
  - { label: Scope, value: Server and proxy MVP }
  - { label: Tests, value: pytest (unit and integration) }
stack: [Python, TCP, Threads, Redis, Pub/Sub, FastAPI, SSE, pytest, Render]
links:
  repo: https://github.com/PedroCaurio/distributed-chat
---

## Problem

A chat on a single server is simple: every client is connected to the same process. The challenge starts with **multiple instances**. A user connected to instance A must receive a message sent by someone on instance B, and the history has to survive any of them going down.

## Architecture

The repository separates three roles:

1. **Chat server.** Accepts TCP connections, keeps one thread per client and uses Redis to store history and replicate events across instances.
2. **Local proxy.** Runs on the user's machine, keeps a single TCP connection to the server and exposes an HTTP API for the front-end: `POST /login`, `POST /messages` and `GET /events` via Server-Sent Events.
3. **Front-end.** Built separately and integrated with the proxy over local HTTP; not part of this repository.

## Message flow

1. The front-end calls `POST /login` on the proxy, which sends a login frame to the server over TCP, as NDJSON.
2. The server checks the name is unique (a `chat:online` SET in Redis), replies with the history and publishes `user_joined` on the pub/sub channel.
3. Every instance receives the event and forwards it to **its own** TCP clients.
4. A message follows the same path: it is persisted in the `chat:history` list and published so every instance delivers it.

## Decisions and trade-offs

- **One thread per client.** Easy to understand and debug; the cost is memory and context switching proportional to the number of connections.
- **Redis in two roles.** Durable storage (history and presence) and a pub/sub bus between instances, so instances never need to know about each other.
- **Local proxy instead of raw TCP in the browser.** Browsers cannot open raw TCP sockets; the proxy translates the native protocol into HTTP and SSE and keeps the server simple.
- **NDJSON frames.** One JSON object per line delimits messages on the TCP stream without a custom binary protocol.

## Fault tolerance

- Durable state lives in Redis, so a new instance can read the history consistently.
- If an instance goes down, its TCP connections go with it and the proxy has to reconnect. New traffic relies on load balancing with health checks in the infrastructure.
- Public TCP load balancing depends on the provider. The repository documents deployment on Render.

## Tests

The suite uses `pytest`, with a separate marker (`-m integration`) for tests that need a real Redis.
