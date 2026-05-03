---
id: overview
title: Flight Software Architecture Overview
sidebar_label: Overview
sidebar_position: 1
---

# Flight Software Architecture

Flight software (FSW) is the software running on the spacecraft itself — the on-board computer (OBC) — that controls the vehicle, processes sensor data, executes mission objectives, responds to ground commands, and manages faults autonomously.

It is the most consequential software you will ever write. A bug in flight software cannot be patched by a user. It cannot be debugged interactively. You have a 12-minute communication window every 94 minutes to uplink commands — and if the software enters an unrecoverable state, the mission may be lost.

---

## The Layered Architecture

Modern spacecraft FSW follows a layered architecture:

```
┌──────────────────────────────────────┐
│         Application Layer            │
│  Mission sequences, autonomy rules,  │
│  science instrument control          │
├──────────────────────────────────────┤
│         Services Layer               │
│  Command & telemetry, event logging, │
│  file management, time services      │
├──────────────────────────────────────┤
│         OSAL / PSP                   │
│  OS Abstraction Layer,               │
│  Platform Support Package            │
├──────────────────────────────────────┤
│         RTOS                         │
│  FreeRTOS, RTEMS, VxWorks            │
├──────────────────────────────────────┤
│         Hardware                     │
│  OBC, sensors, actuators, buses      │
└──────────────────────────────────────┘
```

The layering is not academic — it directly enables two critical properties:

1. **Portability:** The application layer can run on different hardware (different OBC, different RTOS) by only changing the OSAL/PSP layer
2. **Testability:** Application components can be tested on desktop without real hardware

---

## NASA's Core Flight System (cFS)

cFS is NASA's open-source reusable flight software framework. It defines a component-based architecture where software applications ("apps") communicate through a message bus (the Software Bus, SB). Each app has a specific responsibility and no direct dependencies on other apps.

cFS is used on the Lunar Reconnaissance Orbiter, LCRD, PACE, and dozens of CubeSats and commercial missions. If you're going into flight software, understanding cFS is nearly mandatory.

See [cFS Framework](./cfs-framework) for the full deep dive.

---

## The Three Loops

Flight software is structured around three time scales:

**Fast loop (1–100 Hz):** Attitude control, sensor reading, actuator commanding. Must be deterministic. Runs in highest-priority RTOS task.

**Medium loop (1–10 Hz):** Telemetry collection, health monitoring, mode management. Responds to state changes.

**Slow loop (0.1–1 Hz):** Ground command processing, data storage, non-critical diagnostics. Tolerates some latency.

---

## Section Contents

| Page | What It Covers |
|---|---|
| [NASA cFS Framework](./cfs-framework) | Component architecture, Software Bus, app development |
| [Command & Telemetry](./command-telemetry) | CCSDS packet format, uplink/downlink protocol |
| [State Machines](./state-machines) | Spacecraft mode management, HSM design |
| [Fault Management](./fault-management) | FDIR — fault detection, isolation, recovery |
| [Health & Safety](./health-safety) | Limits monitoring, autonomous response, safe mode |
| [Data Stores](./data-stores) | Non-volatile storage, parameter tables, event logging |
| [Boot Sequence](./boot-sequence) | From power-on to operational |
| [Software Updates](./software-updates) | Patching flight software in orbit |
| [Ground Interface](./ground-interface) | The flight-ground boundary |
