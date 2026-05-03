---
id: overview
title: Space Hardware Overview
sidebar_label: Overview
sidebar_position: 1
---

# Space Hardware

Your code runs on hardware. In space, that hardware operates in one of the harshest environments accessible to humans: hard vacuum, extreme thermal cycling, and a constant rain of high-energy particles that can flip bits in your memory and latch up your transistors.

Understanding the hardware constraints is not optional for flight software engineers. The code patterns you use — ECC reads, scrubbing loops, watchdogs, power state machines — only make sense when you understand the physics that makes them necessary.

---

## The Space Environment

### Radiation

Space is filled with high-energy charged particles: protons and electrons trapped in the Van Allen belts, cosmic rays from outside the solar system, and energetic particles from solar events.

These particles interact with microelectronics in two ways:

**Single Event Effects (SEE):**
- **SEU (Single Event Upset):** A particle flips a bit in memory or a register. The most common effect. Non-destructive.
- **SEL (Single Event Latchup):** A particle triggers a parasitic transistor structure, causing a high-current condition. Can destroy the device if power is not cycled.
- **SEFi (Single Event Functional Interrupt):** Corrupts configuration registers or state machines, causing unexpected behavior.

**Total Ionizing Dose (TID):**
- Cumulative radiation damage over the mission lifetime
- Degrades transistor characteristics — threshold voltage shift, increased leakage current
- Rated in krad (Si) — a typical LEO satellite might accumulate 5–30 krad over 3 years

### Thermal

Spacecraft experience extreme thermal cycling as they move between eclipse (shadow) and sunlight. In LEO, an orbital period is ~94 minutes with ~35 minutes in eclipse.

Temperature ranges depend on orbit and thermal design, but −40°C to +85°C is common for electronics. Some components (star trackers, battery packs) have tighter ranges.

**The software implication:** Crystal oscillator frequency drifts with temperature. Clock stability assumptions baked into timing code may need thermal correction.

### Vacuum

No atmosphere means no convective cooling. Heat can only leave the spacecraft by radiation. This affects the thermal design (heat pipes, radiators, coatings) but also the electronics — components designed for conductive cooling on Earth may overheat in vacuum.

---

## The Hardware Stack

```
┌─────────────────────────────────────┐
│          Flight Computer             │
│  (OBC — On-Board Computer)          │
│  RAD750 / ARM Cortex-R / LEON3       │
│  256 KB – 8 MB RAM (EDAC protected) │
│  FLASH / EEPROM (program storage)   │
└──────────────┬──────────────────────┘
               │ SpaceWire / MIL-STD-1553 / CAN
    ┌──────────┼──────────┐
    │          │          │
┌───▼───┐  ┌──▼───┐  ┌───▼────┐
│ ADCS  │  │ EPS  │  │ Comms  │
│ board │  │ board│  │ board  │
│ IMU   │  │ Power│  │ Radio  │
│ RW    │  │ Mgmt │  │ RF/ant │
└───────┘  └──────┘  └────────┘
```

---

## Section Contents

| Page | What It Covers |
|---|---|
| [Radiation Effects](./radiation-effects) | SEU, SEL, TID — what particles do to your hardware |
| [Radiation Hardening](./radiation-hardening) | ECC, TMR, scrubbing, rad-hard component selection |
| [Microcontrollers](./microcontrollers) | ARM Cortex-M/R, SPARC LEON — the chips that fly |
| [FPGAs in Space](./fpga-in-space) | Xilinx Virtex, Microsemi ProASIC, configuration management |
| [Spacecraft Buses](./spacecraft-buses) | I2C, SPI, CAN, MIL-STD-1553, SpaceWire |
| [Power Systems](./power-systems) | Solar power, eclipse survival, load shedding in code |
| [Thermal Vacuum](./thermal-vacuum) | Temperature effects on timing, oscillators, and silicon |
| [CubeSat Hardware](./cubesat-hardware) | Standard form factor, PC104, off-the-shelf components |
| [Sensors & Actuators](./sensors-actuators) | IMU, magnetometer, sun sensor, reaction wheel interfaces |
