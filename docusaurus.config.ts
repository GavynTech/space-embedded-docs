import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: 'Space Embedded Docs',
  tagline: 'C · C++ · RTOS · Hardware — for Flight Software & Space Systems Engineering',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://space-embedded-docs.vercel.app',
  baseUrl: '/',

  organizationName: 'GavynTech',
  projectName: 'space-embedded-docs',

  onBrokenLinks: 'warn',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      require.resolve('docusaurus-lunr-search'),
      {
        languages: ['en'],
      },
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn',
      crossorigin: 'anonymous',
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Space Embedded Docs',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/docs/reference/glossary',
          label: 'Glossary',
          position: 'left',
        },
        {
          to: '/docs/reference/standards-index',
          label: 'Standards',
          position: 'left',
        },
        {
          href: 'https://cfs.gsfc.nasa.gov/',
          label: 'NASA cFS',
          position: 'right',
        },
        {
          href: 'https://github.com/nasa/cFS',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Embedded C/C++',
          items: [
            {label: 'Bare Metal C', to: '/docs/embedded-cpp/bare-metal-c'},
            {label: 'MISRA-C', to: '/docs/embedded-cpp/misra-c'},
            {label: 'Interrupt Design', to: '/docs/embedded-cpp/interrupt-driven-design'},
          ],
        },
        {
          title: 'RTOS',
          items: [
            {label: 'FreeRTOS', to: '/docs/rtos/freertos'},
            {label: 'RTEMS (NASA)', to: '/docs/rtos/rtems'},
            {label: 'Scheduling', to: '/docs/rtos/scheduling'},
          ],
        },
        {
          title: 'Flight Software',
          items: [
            {label: 'NASA cFS', to: '/docs/flight-software/cfs-framework'},
            {label: 'Command & Telemetry', to: '/docs/flight-software/command-telemetry'},
            {label: 'Fault Management', to: '/docs/flight-software/fault-management'},
          ],
        },
        {
          title: 'Synthesis',
          items: [
            {label: 'Attitude Control Loop', to: '/docs/synthesis/attitude-control-loop'},
            {label: 'ECC Memory Scrubber', to: '/docs/synthesis/ecc-memory-scrubber'},
            {label: 'Telemetry Pipeline', to: '/docs/synthesis/telemetry-pipeline'},
          ],
        },
      ],
      copyright: `Space Embedded Docs — Flight Software & Space Systems Reference. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ['c', 'cpp', 'cmake', 'bash', 'python'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
