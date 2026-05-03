import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs',
    component: ComponentCreator('/docs', '84c'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '6c4'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'e2e'),
            routes: [
              {
                path: '/docs/embedded-cpp/bare-metal-c',
                component: ComponentCreator('/docs/embedded-cpp/bare-metal-c', '7cb'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/embedded-cpp/deterministic-cpp',
                component: ComponentCreator('/docs/embedded-cpp/deterministic-cpp', '38c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/embedded-cpp/embedded-toolchains',
                component: ComponentCreator('/docs/embedded-cpp/embedded-toolchains', 'a48'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/embedded-cpp/fixed-point-math',
                component: ComponentCreator('/docs/embedded-cpp/fixed-point-math', 'f32'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/embedded-cpp/interrupt-driven-design',
                component: ComponentCreator('/docs/embedded-cpp/interrupt-driven-design', '81f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/embedded-cpp/memory-management',
                component: ComponentCreator('/docs/embedded-cpp/memory-management', '6fc'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/embedded-cpp/misra-c',
                component: ComponentCreator('/docs/embedded-cpp/misra-c', '355'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/embedded-cpp/overview',
                component: ComponentCreator('/docs/embedded-cpp/overview', 'd27'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/embedded-cpp/testing-embedded',
                component: ComponentCreator('/docs/embedded-cpp/testing-embedded', '9f5'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/embedded-cpp/volatile-and-registers',
                component: ComponentCreator('/docs/embedded-cpp/volatile-and-registers', '039'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/flight-software/boot-sequence',
                component: ComponentCreator('/docs/flight-software/boot-sequence', '001'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/flight-software/cfs-framework',
                component: ComponentCreator('/docs/flight-software/cfs-framework', '21b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/flight-software/command-telemetry',
                component: ComponentCreator('/docs/flight-software/command-telemetry', 'da0'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/flight-software/data-stores',
                component: ComponentCreator('/docs/flight-software/data-stores', '547'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/flight-software/fault-management',
                component: ComponentCreator('/docs/flight-software/fault-management', '0ea'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/flight-software/ground-interface',
                component: ComponentCreator('/docs/flight-software/ground-interface', '164'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/flight-software/health-safety',
                component: ComponentCreator('/docs/flight-software/health-safety', '1d8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/flight-software/overview',
                component: ComponentCreator('/docs/flight-software/overview', '4d6'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/flight-software/software-updates',
                component: ComponentCreator('/docs/flight-software/software-updates', '76c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/flight-software/state-machines',
                component: ComponentCreator('/docs/flight-software/state-machines', '5ad'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '536'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/orbital-physics/adcs-software',
                component: ComponentCreator('/docs/orbital-physics/adcs-software', '637'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/orbital-physics/attitude-representation',
                component: ComponentCreator('/docs/orbital-physics/attitude-representation', '387'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/orbital-physics/coordinate-frames',
                component: ComponentCreator('/docs/orbital-physics/coordinate-frames', 'bcd'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/orbital-physics/kalman-filter',
                component: ComponentCreator('/docs/orbital-physics/kalman-filter', 'dfa'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/orbital-physics/keplerian-orbits',
                component: ComponentCreator('/docs/orbital-physics/keplerian-orbits', '323'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/orbital-physics/link-budget',
                component: ComponentCreator('/docs/orbital-physics/link-budget', '944'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/orbital-physics/orbit-propagation',
                component: ComponentCreator('/docs/orbital-physics/orbit-propagation', '562'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/orbital-physics/overview',
                component: ComponentCreator('/docs/orbital-physics/overview', 'd9e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/orbital-physics/relativistic-effects',
                component: ComponentCreator('/docs/orbital-physics/relativistic-effects', 'e81'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/orbital-physics/time-systems',
                component: ComponentCreator('/docs/orbital-physics/time-systems', '97b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/reference/companies',
                component: ComponentCreator('/docs/reference/companies', '973'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/reference/external-resources',
                component: ComponentCreator('/docs/reference/external-resources', '768'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/reference/glossary',
                component: ComponentCreator('/docs/reference/glossary', '5fb'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/reference/latency-numbers',
                component: ComponentCreator('/docs/reference/latency-numbers', 'f78'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/reference/standards-index',
                component: ComponentCreator('/docs/reference/standards-index', 'd6c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/rtos/freertos',
                component: ComponentCreator('/docs/rtos/freertos', '28a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/rtos/ipc-patterns',
                component: ComponentCreator('/docs/rtos/ipc-patterns', 'a4f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/rtos/overview',
                component: ComponentCreator('/docs/rtos/overview', 'a34'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/rtos/posix-psp',
                component: ComponentCreator('/docs/rtos/posix-psp', 'bd4'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/rtos/rtems',
                component: ComponentCreator('/docs/rtos/rtems', 'f6e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/rtos/scheduling',
                component: ComponentCreator('/docs/rtos/scheduling', 'e23'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/rtos/timing-analysis',
                component: ComponentCreator('/docs/rtos/timing-analysis', '150'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/rtos/vxworks',
                component: ComponentCreator('/docs/rtos/vxworks', 'f63'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/rtos/watchdog-patterns',
                component: ComponentCreator('/docs/rtos/watchdog-patterns', '21b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/rtos/zephyr',
                component: ComponentCreator('/docs/rtos/zephyr', 'bbf'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/safety-reliability/certification-path',
                component: ComponentCreator('/docs/safety-reliability/certification-path', '1b9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/safety-reliability/code-review-process',
                component: ComponentCreator('/docs/safety-reliability/code-review-process', '30a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/safety-reliability/do-178c',
                component: ComponentCreator('/docs/safety-reliability/do-178c', '573'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/safety-reliability/ecss-standards',
                component: ComponentCreator('/docs/safety-reliability/ecss-standards', '26a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/safety-reliability/fault-injection',
                component: ComponentCreator('/docs/safety-reliability/fault-injection', 'd32'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/safety-reliability/formal-verification',
                component: ComponentCreator('/docs/safety-reliability/formal-verification', '3bf'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/safety-reliability/overview',
                component: ComponentCreator('/docs/safety-reliability/overview', 'f4d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/safety-reliability/redundancy-patterns',
                component: ComponentCreator('/docs/safety-reliability/redundancy-patterns', '566'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/safety-reliability/static-analysis',
                component: ComponentCreator('/docs/safety-reliability/static-analysis', '156'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/safety-reliability/testing-strategy',
                component: ComponentCreator('/docs/safety-reliability/testing-strategy', '34a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/space-hardware/cubesat-hardware',
                component: ComponentCreator('/docs/space-hardware/cubesat-hardware', '8f7'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/space-hardware/fpga-in-space',
                component: ComponentCreator('/docs/space-hardware/fpga-in-space', '08a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/space-hardware/microcontrollers',
                component: ComponentCreator('/docs/space-hardware/microcontrollers', '5ac'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/space-hardware/overview',
                component: ComponentCreator('/docs/space-hardware/overview', '882'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/space-hardware/power-systems',
                component: ComponentCreator('/docs/space-hardware/power-systems', 'c5c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/space-hardware/radiation-effects',
                component: ComponentCreator('/docs/space-hardware/radiation-effects', 'cab'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/space-hardware/radiation-hardening',
                component: ComponentCreator('/docs/space-hardware/radiation-hardening', '4a9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/space-hardware/sensors-actuators',
                component: ComponentCreator('/docs/space-hardware/sensors-actuators', 'c81'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/space-hardware/spacecraft-buses',
                component: ComponentCreator('/docs/space-hardware/spacecraft-buses', '2b1'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/space-hardware/thermal-vacuum',
                component: ComponentCreator('/docs/space-hardware/thermal-vacuum', '025'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/synthesis/attitude-control-loop',
                component: ComponentCreator('/docs/synthesis/attitude-control-loop', 'd8d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/synthesis/ccsds-parser',
                component: ComponentCreator('/docs/synthesis/ccsds-parser', 'f6d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/synthesis/ecc-memory-scrubber',
                component: ComponentCreator('/docs/synthesis/ecc-memory-scrubber', 'f55'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/synthesis/orbit-propagator',
                component: ComponentCreator('/docs/synthesis/orbit-propagator', 'f71'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/synthesis/overview',
                component: ComponentCreator('/docs/synthesis/overview', '8ec'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/synthesis/power-budget-manager',
                component: ComponentCreator('/docs/synthesis/power-budget-manager', '2fa'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/synthesis/safe-mode-fsm',
                component: ComponentCreator('/docs/synthesis/safe-mode-fsm', '397'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/synthesis/telemetry-pipeline',
                component: ComponentCreator('/docs/synthesis/telemetry-pipeline', '02e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/synthesis/tmr-voter',
                component: ComponentCreator('/docs/synthesis/tmr-voter', '7a4'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/synthesis/watchdog-supervisor',
                component: ComponentCreator('/docs/synthesis/watchdog-supervisor', '464'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
