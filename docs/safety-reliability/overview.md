---
id: overview
title: Safety & Reliability Overview
sidebar_label: Overview
sidebar_position: 1
---

# Safety & Reliability

Writing the code is the easy part. Proving the code is correct — that it does what it is supposed to do, under all conditions, including ones you didn't anticipate — is the hard part.

In commercial software, this is handled by shipping, monitoring, and patching. In flight software, you cannot ship a patch when the spacecraft is behind the Moon for 45 minutes. You need to get it right before launch.

---

## The Reliability Philosophy

Safety-critical software engineering is built on three principles:

**1. No undefined behavior.** Every possible execution path must be analyzed. An unhandled edge case that crashes a web server sends an HTTP 500. An unhandled edge case in flight software may be unrecoverable.

**2. Determinism.** The software must behave identically given the same inputs, always. No reliance on timing coincidences, uninitialized memory, or platform-specific behavior.

**3. Defense in depth.** Assume hardware will fail. Assume software has bugs. Design the system so that a single failure — hardware or software — cannot cause a mission loss.

---

## The Standards

| Standard | Domain | What It Defines |
|---|---|---|
| **DO-178C** | Avionics | Software development, verification, and certification levels |
| **ECSS-E-ST-40** | Space (ESA) | Space software engineering process |
| **MISRA-C:2012** | Embedded | C language subset for safety-critical code |
| **ISO 26262** | Automotive | Functional safety for road vehicles |
| **IEC 61508** | General | Functional safety of electrical/electronic systems |

For spacecraft, DO-178C (originally for avionics) and ECSS-E-ST-40 (ESA) are the most relevant. NASA follows NPR 7150.2 for software requirements.

---

## Development Assurance Levels

DO-178C defines five **Development Assurance Levels (DAL)** based on the consequence of a software failure:

| DAL | Consequence | Verification Rigor | Example |
|---|---|---|---|
| A | Catastrophic — loss of life or vehicle | Highest | Flight control, propulsion cutoff |
| B | Hazardous — severe injury or mission loss | High | Attitude control, power management |
| C | Major — significant reduction in safety margins | Medium | Telemetry, command routing |
| D | Minor — slight reduction in margins | Low | Non-critical logging, UI |
| E | No effect | None | Ground software, development tools |

Higher DAL requires more artifacts: more test coverage, structural coverage analysis (MC/DC at DAL A/B), independence between development and verification.

---

## Section Contents

| Page | What It Covers |
|---|---|
| [DO-178C](./do-178c) | Avionics software standard — objectives, DALs, artifacts |
| [ECSS Standards](./ecss-standards) | ESA space software standard |
| [Static Analysis](./static-analysis) | Polyspace, Coverity, MISRA enforcement in CI |
| [Formal Verification](./formal-verification) | Model checking, TLA+, Frama-C |
| [Redundancy Patterns](./redundancy-patterns) | Cold/warm/hot standby, TMR, lockstep |
| [Testing Strategy](./testing-strategy) | Unit, integration, HIL, flat-sat testing |
| [Fault Injection](./fault-injection) | Mutation testing, bit-flip injection, stress testing |
| [Code Review Process](./code-review-process) | How safety-critical review differs from startup PRs |
| [Certification Path](./certification-path) | What software certification actually looks like |
