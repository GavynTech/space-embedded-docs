---
id: overview
title: Real-Time Operating Systems Overview
sidebar_label: Overview
sidebar_position: 1
---

# Real-Time Operating Systems

A Real-Time Operating System (RTOS) is not just a small Linux. It is a fundamentally different kind of software — one that makes hard timing guarantees about when tasks execute, how long they take, and what happens when two tasks compete for a resource.

On a spacecraft, missing a deadline is not a performance issue. It is a mission failure.

---

## Hard vs. Soft Real-Time

| Type | Definition | Example |
|---|---|---|
| **Hard real-time** | Missing a deadline is a system failure | Attitude control loop, thruster firing, safety cutoffs |
| **Soft real-time** | Missing a deadline degrades quality, not correctness | Telemetry compression, non-critical logging |
| **Firm real-time** | Late results are useless but not catastrophic | Video frame processing, display updates |

Most spacecraft flight software is hard real-time. The attitude determination and control system (ADCS) must run at a fixed rate — if it misses a cycle, the spacecraft may tumble. A fault management system must detect anomalies within a bounded time — a late detection could allow hardware damage.

---

## What an RTOS Provides

At minimum, an RTOS provides:

1. **Preemptive task scheduler** — tasks are assigned priorities; higher-priority tasks preempt lower-priority tasks immediately
2. **Deterministic context switch** — the time to switch between tasks is bounded and known
3. **IPC primitives** — queues, semaphores, mutexes for safe inter-task communication
4. **Timer services** — periodic task activation, delays, timeouts
5. **Interrupt management** — integration between hardware interrupts and software tasks

---

## The Preemptive Scheduler

Unlike a superloop (see [Bare Metal C](../embedded-cpp/bare-metal-c)), an RTOS scheduler can interrupt a running task mid-execution and switch to a higher-priority task. This is the key mechanism that makes hard real-time behavior possible.

```
Priority 3 (high):  ▓▓░░░░░▓▓░░░░░▓▓    Attitude control — runs every 10 ms
Priority 2 (med):   ░░░▓▓░░░░░▓▓░░░░    Telemetry — runs when not preempted
Priority 1 (low):   ░░░░░▓░░░░░░▓░░░    Background processing
                    ────────────────── time →
```

The highest-priority ready task always runs. Lower-priority tasks run only when no higher-priority task is ready.

---

## RTOS Options for Space

| RTOS | Notes |
|---|---|
| **FreeRTOS** | Open source, widely used in CubeSats and commercial small sat |
| **RTEMS** | NASA's choice — used on Mars rovers, open source, POSIX-compatible |
| **VxWorks** | Commercial, long heritage in avionics and deep space (Voyager, Mars rovers via VME) |
| **Zephyr** | Modern open source, growing aerospace adoption |
| **ThreadX** | Commercial, small footprint, deterministic |
| **INTEGRITY** | High-assurance RTOS, used in safety-critical aerospace |

---

## Section Contents

| Page | What It Covers |
|---|---|
| [FreeRTOS](./freertos) | Tasks, queues, semaphores, FreeRTOS scheduler internals |
| [VxWorks](./vxworks) | Commercial RTOS heritage, Wind River, avionics use |
| [RTEMS](./rtems) | NASA's open-source RTOS — Mars rovers, deep space missions |
| [Zephyr](./zephyr) | Modern open-source RTOS for constrained devices |
| [Scheduling](./scheduling) | Rate-monotonic, EDF, priority inversion, priority ceiling |
| [IPC Patterns](./ipc-patterns) | Queues, mailboxes, mutexes, shared memory in RTOS |
| [Timing Analysis](./timing-analysis) | WCET analysis, stack sizing, deadline guarantees |
| [Watchdog Patterns](./watchdog-patterns) | Hardware/software watchdogs, kick patterns |
| [POSIX PSP](./posix-psp) | NASA's Platform Support Package — portable RTOS abstraction |
