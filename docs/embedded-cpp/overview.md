---
id: overview
title: Embedded C/C++ Overview
sidebar_label: Overview
sidebar_position: 1
---

# Embedded C/C++

The first thing to understand about embedded C/C++ for space systems: it is not a restricted subset of "real" C++. It is a different discipline with different constraints, different idioms, and different failure modes.

Desktop C++ is written for a machine with gigabytes of RAM, a preemptive OS, and a user who can restart the process. Embedded space C is written for a machine with kilobytes of RAM, no OS or a minimal RTOS, and an operator who cannot reach the hardware for months.

That constraint shapes everything.

---

## What Changes

| Assumption | Desktop | Space Embedded |
|---|---|---|
| Memory | Virtually unlimited | 64 KB – 8 MB RAM, static allocation only |
| Heap | `new`/`malloc` freely used | Banned in flight code — non-deterministic |
| Exceptions | Try/catch is idiomatic | Disabled — unhandled exception = unrecoverable |
| Dynamic dispatch | `virtual` everywhere | Avoided in critical paths — vtable indirection has cost |
| OS | Full preemptive OS | Bare metal or minimal RTOS |
| Hardware access | Through drivers, abstracted | Direct register access via `volatile` MMIO |
| Startup | `main()` just starts | Startup code initializes stack, BSS, peripheral clocks |
| Failure | Process crashes, is restarted | Watchdog fires, system resets — must survive and recover |

---

## The Rules That Matter

### No dynamic allocation in flight code

```c
// This is forbidden in flight software
uint8_t* buf = malloc(256);

// This is how you do it
static uint8_t buf[256];  // Allocated at link time, size known statically
```

Why: `malloc` can fail due to heap fragmentation. On a spacecraft, an allocation failure at the wrong moment has no recovery path. Static allocation means memory usage is 100% determined at link time — you can prove at build time that the system has enough RAM.

### `volatile` is not optional

Every memory-mapped hardware register must be declared `volatile`. Without it, the compiler is free to optimize away reads and writes it considers redundant:

```c
// WRONG: compiler may optimize the polling loop away
uint32_t* status_reg = (uint32_t*)0x40001000;
while (!(*status_reg & 0x01));  // wait for ready bit

// CORRECT
volatile uint32_t* status_reg = (volatile uint32_t*)0x40001000;
while (!(*status_reg & 0x01));  // compiler must re-read each iteration
```

### Deterministic timing is a hard requirement

Flight software has deadlines. A sensor read that takes 5 ms on average but occasionally takes 50 ms (due to cache misses, malloc, or OS scheduling jitter) is not acceptable in a hard real-time system. Every function on the critical path must have a bounded worst-case execution time (WCET).

---

## Section Contents

| Page | What It Covers |
|---|---|
| [Bare Metal C](./bare-metal-c) | No OS, startup code, linker scripts, memory map |
| [MISRA-C](./misra-c) | The safety-critical C coding standard — rules and rationale |
| [Memory Management](./memory-management) | Static allocation, memory pools, stack sizing |
| [Volatile & Registers](./volatile-and-registers) | MMIO access, hardware registers, `volatile` semantics |
| [Interrupt-Driven Design](./interrupt-driven-design) | ISRs, atomicity, shared state with interrupts |
| [Fixed-Point Math](./fixed-point-math) | Integer arithmetic in place of floating point |
| [Deterministic C++](./deterministic-cpp) | C++ features safe for flight code and which to avoid |
| [Embedded Toolchains](./embedded-toolchains) | arm-none-eabi-gcc, linker scripts, .elf/.bin output |
| [Testing Embedded](./testing-embedded) | Unit testing without hardware — CMock, Unity, Renode |
