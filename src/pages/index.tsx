import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

const sections = [
  {
    label: 'Embedded C/C++',
    path: '/docs/embedded-cpp/overview',
    items: ['bare-metal-c', 'misra-c', 'memory-management', 'volatile-and-registers', 'interrupt-driven-design', 'fixed-point-math', 'deterministic-cpp', 'embedded-toolchains'],
  },
  {
    label: 'Real-Time Operating Systems',
    path: '/docs/rtos/overview',
    items: ['freertos', 'rtems', 'vxworks', 'scheduling', 'ipc-patterns', 'timing-analysis', 'watchdog-patterns', 'posix-psp'],
  },
  {
    label: 'Space Hardware',
    path: '/docs/space-hardware/overview',
    items: ['radiation-effects', 'radiation-hardening', 'microcontrollers', 'fpga-in-space', 'spacecraft-buses', 'power-systems', 'thermal-vacuum', 'cubesat-hardware'],
  },
  {
    label: 'Flight Software Architecture',
    path: '/docs/flight-software/overview',
    items: ['cfs-framework', 'command-telemetry', 'state-machines', 'fault-management', 'health-safety', 'data-stores', 'boot-sequence', 'software-updates'],
  },
  {
    label: 'Orbital Physics',
    path: '/docs/orbital-physics/overview',
    items: ['keplerian-orbits', 'orbit-propagation', 'coordinate-frames', 'attitude-representation', 'adcs-software', 'kalman-filter', 'time-systems', 'relativistic-effects'],
  },
  {
    label: 'Safety & Reliability',
    path: '/docs/safety-reliability/overview',
    items: ['do-178c', 'ecss-standards', 'static-analysis', 'redundancy-patterns', 'testing-strategy', 'fault-injection', 'formal-verification', 'certification-path'],
  },
  {
    label: 'Synthesis',
    path: '/docs/synthesis/overview',
    items: ['attitude-control-loop', 'ecc-memory-scrubber', 'tmr-voter', 'ccsds-parser', 'safe-mode-fsm', 'watchdog-supervisor', 'orbit-propagator', 'telemetry-pipeline'],
  },
];

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="C · C++ · RTOS · Hardware — for Flight Software & Space Systems Engineering">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <p className={styles.heroBadge}>Flight Software · Space Systems Engineering</p>
          <h1 className={styles.heroTitle}>Space Embedded Docs</h1>
          <p className={styles.heroSubtitle}>C · C++ · RTOS · Hardware — from bare metal to orbit</p>
          <div className={styles.buttons}>
            <Link className={clsx('button button--lg', styles.primaryButton)} to="/docs/intro">
              Start Here
            </Link>
            <Link className={clsx('button button--lg', styles.secondaryButton)} to="/docs/synthesis/overview">
              Synthesis
            </Link>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className="container">
          <div className={styles.toc}>
            {sections.map((section) => (
              <div key={section.label} className={styles.section}>
                <Link to={section.path} className={styles.sectionTitle}>
                  {section.label}
                </Link>
                <div className={styles.itemGrid}>
                  {section.items.map((item) => (
                    <Link
                      key={item}
                      to={`/docs/${section.path.split('/docs/')[1].split('/')[0]}/${item}`}
                      className={styles.item}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
