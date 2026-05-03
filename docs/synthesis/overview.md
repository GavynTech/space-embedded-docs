---
id: overview
title: Synthesis Overview
sidebar_label: Overview
sidebar_position: 1
---

# Synthesis

This section takes real spacecraft software components and implements them fully — showing exactly how embedded C/C++, RTOS primitives, hardware constraints, orbital physics, and safety requirements interact in a single implementation.

Each synthesis page is the point where the theory becomes code that could actually fly.

---

## The Philosophy

You can read about quaternion attitude representation, RTOS task scheduling, ECC memory, and CCSDS packets as separate topics. But in production flight software, they are not separate — they interact constantly.

The attitude control loop uses quaternions, reads from sensors over SPI bus, runs as a FreeRTOS task with a hard deadline, and its outputs must be ECC-protected because a single bit flip in a reaction wheel torque command could destabilize the spacecraft.

The synthesis section is where you see all of this together.

---

## Component Index

| Component | Disciplines | What It Shows |
|---|---|---|
| [Attitude Control Loop](./attitude-control-loop) | ADCS + RTOS + C++ + Hardware | Full sensor→EKF→PD→actuator loop |
| [Safe Mode FSM](./safe-mode-fsm) | FSW + Safety + RTOS | Complete fault-triggered state machine |
| [CCSDS Parser](./ccsds-parser) | FSW + Embedded C + Protocols | Zero-copy packet parser |
| [ECC Memory Scrubber](./ecc-memory-scrubber) | Hardware + Embedded C + Safety | SRAM scrubbing with error correction |
| [Watchdog Supervisor](./watchdog-supervisor) | RTOS + Safety + Bare Metal | Multi-level watchdog architecture |
| [TMR Voter](./tmr-voter) | Safety + Embedded C | Triple modular redundancy voter |
| [Orbit Propagator](./orbit-propagator) | Orbital Physics + C++ | SGP4 with coordinate transforms |
| [Power Budget Manager](./power-budget-manager) | Hardware + FSW + RTOS | Load shedding and eclipse mode |
| [Telemetry Pipeline](./telemetry-pipeline) | FSW + Embedded C + Protocols | End-to-end sensor to downlink |
