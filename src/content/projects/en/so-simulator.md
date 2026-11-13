---
title: Operating System Simulator
summary: A GUI simulator that shows, step by step, process scheduling with Round Robin, memory management with FIFO paging and input/output devices.
role: Co-author
order: 3
context: Operating Systems course
team:
  - { name: Pedro Caurio, url: https://github.com/PedroCaurio }
  - { name: Felipe Fagundes, url: https://github.com/FelipeFagundesCosta }
  - { name: mathyc0de, url: https://github.com/mathyc0de }
facts:
  - { label: Team, value: 3 people }
  - { label: Interface, value: PyQt6 }
stack: [Python, PyQt6]
links:
  repo: https://github.com/PedroCaurio/so-simulator
---

## Problem

Scheduling, paging and input/output are usually studied separately and on paper. The simulator brings all three into one graphical interface, so you can watch a process compete for the CPU, trigger page faults and wait for a device at the same time.

## What the simulator models

- **Process scheduling** with the Round Robin algorithm.
- **Memory management** with paging and a FIFO replacement policy.
- **Simulated input/output devices**, with processes waiting on them.

## Architecture

- **`src/`** holds the simulator logic: scheduler, processes, memory manager and device manager.
- **`UI/`** holds the PyQt6 interface, separate from the logic.
- **An input generator** creates simulation scenarios and checks that memory variables are powers of 2, as paging requires.
- The main modules (scheduler, devices, memory, processes and the entry point) are documented.

## Decisions and trade-offs

- **Logic separate from the interface.** Algorithms can be tested and evolved without touching widgets; the cost is keeping the simulator state and the screen in sync.
- **Generated input instead of typed input.** Scenarios are reproducible and valid by construction, such as power-of-2 memory sizes.

## Next steps

The repository itself lists the planned improvements:

- colors per process state and highlighting of page hits, replacements and insertions in memory;
- views of page tables and of each device's queue;
- more scheduling algorithms and replacement policies;
- limits for total memory and per-process allocation.
