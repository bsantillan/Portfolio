import type { Content } from '../types';

export const cases: Content['cases'] = {
  title: 'Case studies',
  intro: 'Five projects, told the same way: the context, what I did and what I built.',
  labels: {
    context: 'Context',
    role: 'My role',
    built: 'What I built',
    decisions: 'Technical decisions',
    stack: 'Stack',
    status: 'Status',
    links: 'Resources',
    caseN: (n) => `Case ${String(n).padStart(2, '0')}`,
  },
  items: [
    {
      id: 'iot',
      title: 'IoT power monitoring',
      org: 'Provincial Directorate of Digital Innovation (Buenos Aires)',
      period: 'Since 2025',
      area: 'Data & operations',
      context:
        'An energy-efficiency project measures electricity use in public buildings with per-circuit sensors. Another team built the sensors and their firmware. Readings sat in a local buffer, with no alerts and no easy way to query them.',
      role: 'Developer. I own everything after the sensor reading: where the data lives, how the system is operated and how people read the measurements.',
      built: [
        'Migrated the local buffer to MongoDB time-series collections with automated backups.',
        'An admin panel for sensors, floors and circuits.',
        'Failure and downtime alerts with node_exporter, Prometheus, Alertmanager and Uptime Kuma, posted to Discord.',
        'Most of the Python dashboard: around 50 charts and metrics.',
      ],
      decisions: [
        'MongoDB time series for readings: each measurement keeps its sensor and timestamp and is queried by time window.',
        'Two layers of monitoring: Prometheus and Alertmanager for machine health, Uptime Kuma for service availability.',
        'Alerts go to Discord, where the team already talks every day.',
      ],
      stack: ['Python', 'MongoDB', 'Prometheus', 'Alertmanager', 'Uptime Kuma', 'node_exporter'],
      status: 'Ongoing. I am also researching how to break consumption down by appliance from the current waveform (NILM); no results yet.',
      links: [{ label: 'Private code (public sector)' }],
      diagram: {
        key: 'iot',
        title: 'Data flow diagram: sensors send readings to MongoDB; from there come the Python dashboard, the admin panel and the alerts, which post to Discord.',
        caption: 'Data flow. Everything to the right of the sensors is my part.',
      },
    },
    {
      id: 'sistema-diseno',
      title: 'Accessible design system',
      org: 'Provincial Directorate of Digital Innovation (Buenos Aires)',
      period: 'Since 2025',
      area: 'Accessibility & frontend',
      context:
        'The province has an accessible design system for its digital services. The design team defined the components; they still had to become code that development teams could use.',
      role: 'Developer. I turned the components the design team created into code.',
      built: [
        'Several of the system’s components, working and ready to integrate.',
        'Every component works with a keyboard, a screen reader and zoom.',
      ],
      decisions: [],
      stack: [],
      status: 'Working. Not in public use yet.',
      links: [{ label: 'Private code (public sector)' }],
    },
    {
      id: 'ypf',
      title: 'Inspection management system',
      org: 'YPF S.A. · Static Equipment Inspection',
      period: 'Jun – Sep 2025 · Professional internship',
      area: 'Power Platform',
      context:
        'Inspections were coordinated through Excel spreadsheets and Teams messages. The area needed a system where every inspection was recorded and could be tracked.',
      role: 'Intern, through the UTN FRLP – YPF agreement. I built the system end to end.',
      built: [
        'A data model in Dataverse.',
        'A Power Apps application to log and look up inspections.',
        'Power Automate flows that connect the app with the rest of the process.',
        'A Power BI report to follow the status of inspections.',
      ],
      decisions: [
        'Dataverse instead of lists or spreadsheets: a relational model with permissions, inside the Microsoft ecosystem the company already uses.',
        'Everything on Power Platform, so the area can maintain it without relying on a development team.',
      ],
      stack: ['Power Apps', 'Power Automate', 'Power BI', 'Dataverse'],
      status: 'Delivered at the end of the internship. For confidentiality I show no screenshots or data: the diagram is my own and generic.',
      links: [{ label: 'Confidential project' }],
      diagram: {
        key: 'ypf',
        title: 'Generic diagram: Power Apps records inspections in Dataverse; Power Automate runs the flows and Power BI shows their status.',
        caption: 'Architecture, no real data.',
      },
    },
    {
      id: 'pasa-la-pagina',
      title: 'Pasá la Página',
      org: 'Freelance project',
      period: 'Since Mar 2025',
      area: 'Full stack',
      context:
        'An app where readers swap, donate or sell books and course notes, with listings on a map and direct chat between people.',
      role: 'Full-stack developer: backend, mobile app and infrastructure.',
      built: [
        'A Spring Boot REST API with JWT authentication and Spring Security.',
        'Real-time chat and notifications over WebSockets.',
        'A map of nearby listings with the Google Maps API.',
        'The React Native mobile app and a Docker-based deployment setup.',
      ],
      decisions: [
        'Stateless JWT, so the mobile app authenticates the same way against any instance.',
        'WebSockets for chat instead of polling: messages arrive instantly, with less traffic.',
      ],
      stack: ['React Native', 'Spring Boot', 'Spring Security', 'WebSockets', 'MySQL', 'Docker'],
      status: 'In its final stage, getting the Android release ready.',
      links: [{ label: 'Private code' }],
      image: {
        key: 'pasa-la-pagina',
        width: 982,
        height: 520,
        alt: 'Four app screens: a home feed with nearby and recent books, a map of La Plata with pinned listings, a chat between two users and a profile with reviews and swap history.',
      },
    },
    {
      id: 'los-ciruelos',
      title: 'Padel court bookings at Los Ciruelos',
      org: 'Team project',
      period: '2024 – 2025',
      area: 'Full stack',
      context:
        'A padel club took bookings by hand. The goal was to let members see open slots and book on their own.',
      role: 'Full-stack development within a team, plus analysis and interviews with the club.',
      built: [
        'A slot grid per court and per day.',
        'A Spring Boot backend with MySQL.',
        'Firebase integration.',
        'A Docker-based development and deployment setup.',
      ],
      decisions: ['Docker so the whole team ran the same environment.'],
      stack: ['Angular', 'Spring Boot', 'MySQL', 'Firebase', 'Docker'],
      status: 'Built as a team; rollout at the club was planned, with ongoing maintenance.',
      links: [{ label: 'Code on GitHub', href: 'https://github.com/KaterinaMariescurren/Proyecto-los-ciruelos' }],
      image: {
        key: 'los-ciruelos',
        width: 1908,
        height: 919,
        alt: 'Los Ciruelos Padel Club home screen: a date picker and a timetable from 8 am to 10 pm for courts 1 to 4.',
      },
    },
  ],
};

export const archive: Content['archive'] = {
  title: 'Archive',
  intro: 'Analysis and design work from university.',
  items: [
    {
      id: 'menu-accesible',
      title: 'Accessible menu',
      kind: 'UX & analysis',
      summary: 'An app that lets blind and low-vision people read restaurant and shop menus on their own, with a screen reader or in braille.',
      stack: ['Figma'],
      links: [{ label: 'Prototype in Figma', href: 'https://www.figma.com/design/bIiDuIJXq5OaLRm0hMMGK0/Mockup-DS-Inclusivo?node-id=0-1' }],
      image: {
        key: 'menu-accesible',
        width: 982,
        height: 520,
        alt: 'Four prototype screens: a welcome screen with an eye icon, a choice between customer and venue, venue types and a three-step sign-up.',
      },
    },
    {
      id: 'estacionamiento',
      title: 'Paid street parking in City Bell',
      kind: 'Design & analysis',
      summary: 'A mobile app to find and pay for metered parking, with a reminder of the time left.',
      stack: ['React Native', 'Figma'],
      links: [{ label: 'Code on GitHub', href: 'https://github.com/KaterinaMariescurren/aplicaciones_moviles' }],
      image: {
        key: 'estacionamiento',
        width: 982,
        height: 520,
        alt: "Two app screens: the welcome screen and the home screen, with the user's cars, active parking sessions and history.",
      },
    },
  ],
};
