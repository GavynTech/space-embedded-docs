import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type Feature = {
  icon: string;
  label: string;
  title: string;
  body: string;
  topics: string[];
  href: string;
};

const features: Feature[] = [
  {
    icon: '⚙️',
    label: 'Language Foundation',
    title: 'Embedded C/C++',
    body: 'The language patterns that survive in resource-constrained, safety-critical environments. Bare metal, MISRA-C, deterministic code — no malloc, no exceptions, no surprises.',
    topics: ['bare-metal', 'MISRA-C', 'volatile', 'ISRs', 'fixed-point', 'toolchains'],
    href: '/docs/embedded-cpp/overview',
  },
  {
    icon: '⏱️',
    label: 'Scheduling & IPC',
    title: 'Real-Time Operating Systems',
    body: 'The scheduler, IPC primitives, and timing guarantees that make spacecraft behave predictably. FreeRTOS, RTEMS, VxWorks — how they work and when to use each.',
    topics: ['FreeRTOS', 'RTEMS', 'RMS', 'WCET', 'watchdogs', 'PSP'],
    href: '/docs/rtos/overview',
  },
  {
    icon: '🛰️',
    label: 'Physical Constraints',
    title: 'Space Hardware',
    body: 'The hardware stack your software runs on. Radiation effects, ECC memory, rad-hard MCUs, FPGAs, spacecraft buses, and the physics of operating in vacuum.',
    topics: ['SEU/SEL', 'RAD750', 'SpaceWire', 'CAN', 'MIL-STD-1553', 'CubeSat'],
    href: '/docs/space-hardware/overview',
  },
  {
    icon: '🚀',
    label: 'Architecture',
    title: 'Flight Software',
    body: "How real spacecraft software is structured and operated. NASA's Core Flight System, CCSDS commanding, fault management, safe modes — the architecture that flies.",
    topics: ['NASA cFS', 'CCSDS', 'FDIR', 'state machines', 'telemetry', 'uplink'],
    href: '/docs/flight-software/overview',
  },
  {
    icon: '🌍',
    label: 'The Math',
    title: 'Orbital Physics',
    body: 'The physics your software must respect. Keplerian orbits, SGP4 propagation, coordinate transforms, quaternion attitude, EKF estimation — implemented in C++.',
    topics: ['SGP4', 'quaternions', 'EKF', 'ADCS', 'ECI/ECEF', 'GPS time'],
    href: '/docs/orbital-physics/overview',
  },
  {
    icon: '🔒',
    label: 'Standards & Verification',
    title: 'Safety & Reliability',
    body: 'How you prove software is correct before it launches. DO-178C, ECSS standards, static analysis, TMR, fault injection, and the path to software certification.',
    topics: ['DO-178C', 'ECSS', 'TMR', 'Polyspace', 'HIL testing', 'formal methods'],
    href: '/docs/safety-reliability/overview',
  },
];

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <p className={styles.sectionTitle}>What's Inside</p>
        <h2 className={styles.sectionHeading}>Six Disciplines. One Mission.</h2>
        <p className={styles.sectionSubtitle}>
          Flight software engineering sits at the intersection of embedded systems, real-time computing, orbital mechanics, and safety standards. This reference covers all of it.
        </p>
        <div className={styles.grid}>
          {features.map((f) => (
            <Link key={f.title} to={f.href} style={{textDecoration: 'none', color: 'inherit'}}>
              <div className={styles.card}>
                <span className={styles.cardIcon}>{f.icon}</span>
                <p className={styles.cardLabel}>{f.label}</p>
                <h3 className={styles.cardTitle}>{f.title}</h3>
                <p className={styles.cardBody}>{f.body}</p>
                <div className={styles.cardTopics}>
                  {f.topics.map((t) => (
                    <span key={t} className={styles.topic}>{t}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
