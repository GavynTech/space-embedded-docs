---
id: overview
title: Orbital Physics Overview
sidebar_label: Overview
sidebar_position: 1
---

# Orbital Physics

Flight software engineers implement physics. The attitude determination algorithm you write encodes rotational kinematics. The orbit propagator you integrate encodes gravitational dynamics. The time conversion function you call encodes relativistic corrections accumulated over decades of engineering by the GPS system.

You don't need to be a physicist. You need to understand the physics well enough to implement it correctly, debug it when the numbers look wrong, and recognize when an approximation breaks down.

---

## Why This Matters

A spacecraft is a physical object governed by Newton's laws, Einstein's corrections, and the geometry of the solar system. The software must model and respond to this physical reality.

Errors have direct consequences:

- **Wrong quaternion convention** → attitude estimate is off by 180° → solar panels point away from the sun
- **Wrong time system** → GPS position error of meters to kilometers depending on how you compute it
- **Euler angle singularity (gimbal lock)** → attitude controller fails at a specific orientation
- **Orbit propagation error** → predicted ground contact windows are wrong → telemetry is not downlinked
- **Wrong coordinate frame** → thruster fires in the wrong direction

These are not hypothetical. They have happened on real missions.

---

## The Coordinate Frames

Everything in orbital mechanics requires you to specify *which frame* a vector is expressed in. Confusion between frames is the most common source of errors.

| Frame | Origin | Definition | Use Case |
|---|---|---|---|
| **ECI** (Earth Centered Inertial) | Earth center | X toward vernal equinox, Z toward north pole, non-rotating | Orbit propagation, absolute position |
| **ECEF** (Earth Centered Earth Fixed) | Earth center | Rotates with Earth — X toward prime meridian | GPS, ground station location |
| **LVLH** (Local Vertical Local Horizontal) | Spacecraft | Z toward Earth center, X along velocity vector | Relative navigation, formation flying |
| **Body** | Spacecraft center | Fixed to spacecraft structure | Attitude control, sensor mounting |
| **Orbit** | Spacecraft | Z along orbital angular momentum | Orbital maneuvers |

---

## Section Contents

| Page | What It Covers |
|---|---|
| [Keplerian Orbits](./keplerian-orbits) | Orbital elements, Kepler's laws, the two-body problem |
| [Orbit Propagation](./orbit-propagation) | SGP4, numerical integrators, perturbations |
| [Coordinate Frames](./coordinate-frames) | ECI, ECEF, LVLH, body — transforms in C++ |
| [Attitude Representation](./attitude-representation) | Quaternions, rotation matrices, Euler angles |
| [ADCS Software](./adcs-software) | The full ADCS loop — sensors, estimator, controller, actuators |
| [Kalman Filter](./kalman-filter) | EKF for attitude and orbit estimation |
| [Time Systems](./time-systems) | UTC, GPS time, TAI, UNIX — conversions that matter |
| [Relativistic Effects](./relativistic-effects) | Clock corrections at orbital velocity |
| [Link Budget](./link-budget) | Communications math for software engineers |
