---
title: distributed-chat
summary: Chat multiusuário pensado para rodar em várias instâncias de servidor. Sockets TCP com uma thread por cliente, Redis para estado e replicação via pub/sub, e um proxy local com FastAPI e Server-Sent Events para o navegador.
role: Coautor
order: 2
context: Projeto acadêmico de sistemas distribuídos
team:
  - { name: Pedro Caurio, url: https://github.com/PedroCaurio }
  - { name: Felipe Fagundes, url: https://github.com/FelipeFagundesCosta }
facts:
  - { label: Equipe, value: 2 pessoas }
  - { label: Escopo, value: MVP de servidor e proxy }
  - { label: Testes, value: pytest (unitários e integração) }
stack: [Python, TCP, Threads, Redis, Pub/Sub, FastAPI, SSE, pytest, Render]
links:
  repo: https://github.com/PedroCaurio/distributed-chat
---

## Problema

Um chat em um único servidor é simples: todos os clientes estão conectados ao mesmo processo. O desafio aparece quando há **várias instâncias**. Um usuário conectado à instância A precisa receber a mensagem enviada por alguém conectado à instância B, e o histórico precisa sobreviver à queda de qualquer uma delas.

## Arquitetura

O repositório separa três papéis:

1. **Servidor de chat.** Aceita conexões TCP, mantém uma thread por cliente e usa Redis para guardar o histórico e replicar eventos entre instâncias.
2. **Proxy local.** Roda na máquina do usuário, mantém uma única conexão TCP com o servidor e expõe uma API HTTP para o front-end: `POST /login`, `POST /messages` e `GET /events` via Server-Sent Events.
3. **Front-end.** Desenvolvido separadamente e integrado ao proxy por HTTP local; não faz parte deste repositório.

## Fluxo de uma mensagem

1. O front-end chama `POST /login` no proxy, que envia um frame de login ao servidor via TCP, em NDJSON.
2. O servidor valida que o nome é único (um SET `chat:online` no Redis), responde com o histórico e publica `user_joined` no canal pub/sub.
3. Todas as instâncias recebem o evento e o repassam aos **seus** clientes TCP.
4. Uma mensagem segue o mesmo caminho: é persistida na lista `chat:history` e publicada para que todas as instâncias a entreguem.

## Decisões e trade-offs

- **Uma thread por cliente.** Modelo fácil de entender e depurar; o custo é memória e troca de contexto proporcionais ao número de conexões.
- **Redis com dois papéis.** Como armazenamento durável (histórico e presença) e como barramento pub/sub entre instâncias. Isso evita que as instâncias precisem se conhecer.
- **Proxy local em vez de TCP direto no navegador.** Navegadores não abrem sockets TCP brutos; o proxy traduz o protocolo nativo para HTTP e SSE, mantendo o servidor simples.
- **Frames NDJSON.** Um JSON por linha delimita mensagens no fluxo TCP sem um protocolo binário próprio.

## Tolerância a falhas

- O estado durável fica no Redis, então uma instância nova consegue ler o histórico de forma consistente.
- Se uma instância cai, as conexões TCP dela caem junto e o proxy precisa reconectar. O tráfego novo depende de balanceamento com health checks na infraestrutura.
- O balanceamento de TCP na borda pública depende do provedor. O repositório documenta o deploy no Render.

## Testes

A suíte usa `pytest`, com um marcador separado (`-m integration`) para os testes que precisam de um Redis real.
