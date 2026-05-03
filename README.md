# Space Embedded Docs

A practitioner reference for flight software and space systems engineering — C, C++, RTOS, hardware, orbital physics, and safety standards.

Not a tutorial. A reference for engineers writing code that flies.

**[space-embedded-docs.vercel.app](https://space-embedded-docs.vercel.app)**

---

## What's Inside

**Embedded C/C++** — Bare metal, MISRA-C, static memory, volatile/MMIO, ISRs, fixed-point math, deterministic code, toolchains.

**Real-Time Operating Systems** — FreeRTOS, RTEMS, VxWorks, Zephyr, scheduling theory, IPC, WCET analysis, watchdogs.

**Space Hardware** — Radiation effects (SEU/SEL/TID), ECC, rad-hard MCUs, FPGAs, spacecraft buses, power systems, thermal vacuum.

**Flight Software Architecture** — NASA cFS, CCSDS command/telemetry, state machines, FDIR, fault management, boot sequence.

**Orbital Physics** — Keplerian orbits, SGP4, coordinate frames, quaternion attitude, EKF estimation, time systems.

**Safety & Reliability** — DO-178C, ECSS standards, static analysis, TMR, redundancy patterns, HIL testing, certification.

**Synthesis** — Full implementations: attitude control loop, ECC scrubber, TMR voter, CCSDS parser, safe mode FSM, telemetry pipeline.

---

## Who This Is For

Engineers targeting flight software roles at companies like Firefly, Relativity Space, Rocket Lab, Spire, Planet Labs. Strong C/C++ assumed — no aerospace background required.

---

## Run Locally

Requires Node.js 20+.

```bash
git clone https://github.com/GavynTech/space-embedded-docs.git
cd space-embedded-docs
npm install
npm start
```

Opens at `http://localhost:3000`.

---

## Built With

- [Docusaurus](https://docusaurus.io/)
- [KaTeX](https://katex.org/)
- [Prism](https://prismjs.com/)
- [Lunr](https://lunrjs.com/)
