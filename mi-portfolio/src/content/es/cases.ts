import type { Content } from '../types';

export const cases: Content['cases'] = {
  title: 'Casos',
  intro: 'Cuatro proyectos contados igual: el contexto, lo que hice yo y lo que construí.',
  labels: {
    context: 'Contexto',
    role: 'Mi rol',
    built: 'Qué construí',
    decisions: 'Decisiones técnicas',
    stack: 'Stack',
    status: 'Estado',
    links: 'Recursos',
    caseN: (n) => `Caso ${String(n).padStart(2, '0')}`,
  },
  items: [
    {
      id: 'iot',
      title: 'Monitoreo eléctrico IoT',
      org: 'Dirección Provincial de Innovación Digital (PBA)',
      period: 'Desde 2025',
      area: 'Datos y operación',
      context:
        'Un proyecto de eficiencia energética mide el consumo eléctrico de edificios públicos con sensores por circuito. Los sensores y su firmware los desarrolló otro equipo. Las lecturas quedaban en un buffer local, sin alertas ni una forma simple de consultarlas.',
      role: 'Desarrollador. Me ocupo de lo que pasa después de la lectura del sensor: dónde se guardan los datos, cómo se opera el sistema y cómo se leen las mediciones.',
      built: [
        'Migración del buffer local a MongoDB con colecciones de series de tiempo y backups automáticos.',
        'Panel de administración de sensores, pisos y circuitos.',
        'Alertas de fallas y caídas con node_exporter, Prometheus, Alertmanager y Uptime Kuma, con avisos en Discord.',
        'Gran parte del dashboard en Python: alrededor de 50 gráficos y métricas.',
      ],
      decisions: [
        'Series de tiempo de MongoDB para las lecturas: cada medición queda con su sensor y su marca de tiempo, y se consulta por ventanas.',
        'Monitoreo en dos capas: Prometheus y Alertmanager para el estado de los equipos, Uptime Kuma para la disponibilidad de los servicios.',
        'Los avisos llegan a Discord, el canal que el equipo ya usa todos los días.',
      ],
      stack: ['Python', 'MongoDB', 'Prometheus', 'Alertmanager', 'Uptime Kuma', 'node_exporter'],
      status: 'En curso. Además investigo cómo desagregar el consumo por aparato a partir de la forma de onda (NILM); todavía sin resultados.',
      links: [{ label: 'Código privado (sector público)' }],
      diagram: {
        key: 'iot',
        title: 'Diagrama del flujo de datos: los sensores envían lecturas a MongoDB; de ahí salen el dashboard en Python, el panel de administración y las alertas, que avisan en Discord.',
        caption: 'Flujo de datos. Todo lo que está a la derecha de los sensores es mi parte.',
      },
    },
    {
      id: 'ypf',
      title: 'Sistema de gestión de inspecciones',
      org: 'YPF S.A. · Inspección de Equipos Estáticos',
      period: 'Jun – sep 2025 · Práctica Profesional',
      area: 'Power Platform',
      context:
        'Las inspecciones se coordinaban con planillas de Excel y mensajes de Teams. Hacía falta un sistema donde cada inspección quedara registrada y se pudiera seguir.',
      role: 'Practicante profesional, en el marco del convenio UTN FRLP – YPF. Construí el sistema de punta a punta.',
      built: [
        'Modelo de datos en Dataverse.',
        'Aplicación en Power Apps para cargar y consultar inspecciones.',
        'Flujos de Power Automate que conectan la aplicación con el resto del proceso.',
        'Tablero en Power BI para seguir el estado de las inspecciones.',
      ],
      decisions: [
        'Dataverse en lugar de listas o planillas: un modelo relacional con permisos, dentro del ecosistema Microsoft que la empresa ya usa.',
        'Todo sobre Power Platform, para que el área pueda mantenerlo sin depender de un equipo de desarrollo.',
      ],
      stack: ['Power Apps', 'Power Automate', 'Power BI', 'Dataverse'],
      status: 'Entregado al cierre de la práctica. Por confidencialidad no muestro capturas ni datos: el diagrama es propio y genérico.',
      links: [{ label: 'Proyecto confidencial' }],
      diagram: {
        key: 'ypf',
        title: 'Diagrama genérico: Power Apps registra inspecciones en Dataverse; Power Automate dispara los flujos y Power BI muestra el estado.',
        caption: 'Arquitectura, sin datos reales.',
      },
    },
    {
      id: 'pasa-la-pagina',
      title: 'Pasá la Página',
      org: 'Proyecto freelance',
      period: 'Desde mar 2025',
      area: 'Full stack',
      context:
        'Una app para intercambiar, donar o vender libros y apuntes entre lectores, con publicaciones ubicadas en un mapa y conversación directa entre las partes.',
      role: 'Desarrollador full stack: backend, app móvil e infraestructura.',
      built: [
        'API REST en Spring Boot con autenticación por JWT y Spring Security.',
        'Chat y notificaciones en tiempo real con WebSockets.',
        'Mapa de publicaciones cercanas con la API de Google Maps.',
        'App móvil en React Native y entorno de despliegue con Docker.',
      ],
      decisions: [
        'JWT sin estado en el servidor, para que la app móvil se autentique igual en cualquier instancia.',
        'WebSockets para el chat en lugar de consultas periódicas: los mensajes llegan al instante y con menos tráfico.',
      ],
      stack: ['React Native', 'Spring Boot', 'Spring Security', 'WebSockets', 'MySQL', 'Docker'],
      status: 'En la etapa final, preparando la versión para Android.',
      links: [{ label: 'Código privado' }],
      image: {
        key: 'pasa-la-pagina',
        width: 982,
        height: 520,
        alt: 'Cuatro pantallas de la app: inicio con libros cercanos y recientes, mapa de La Plata con publicaciones marcadas, un chat entre dos usuarios y un perfil con reseñas e historial de intercambios.',
      },
    },
    {
      id: 'los-ciruelos',
      title: 'Reservas de pádel en Los Ciruelos',
      org: 'Proyecto en equipo',
      period: '2024 – 2025',
      area: 'Full stack',
      context:
        'Un club de pádel tomaba las reservas a mano. El objetivo fue que cada socio pudiera ver los turnos libres y reservar por su cuenta.',
      role: 'Desarrollo full stack dentro de un equipo, con análisis y entrevistas al club.',
      built: [
        'Grilla de turnos por cancha y por día.',
        'Backend en Spring Boot con MySQL.',
        'Integración con Firebase.',
        'Entorno de desarrollo y despliegue con Docker.',
      ],
      decisions: [
        'Docker para que todo el equipo levantara el mismo entorno.',
      ],
      stack: ['Angular', 'Spring Boot', 'MySQL', 'Firebase', 'Docker'],
      status: 'Desarrollado en equipo; la implementación en el club quedó prevista, con mantenimiento posterior.',
      links: [{ label: 'Código en GitHub', href: 'https://github.com/KaterinaMariescurren/Proyecto-los-ciruelos' }],
      image: {
        key: 'los-ciruelos',
        width: 1908,
        height: 919,
        alt: 'Pantalla de inicio de Los Ciruelos Padel Club: selector de fecha y grilla de horarios de 8 a 22 para las canchas 1 a 4.',
      },
    },
  ],
};

export const archive: Content['archive'] = {
  title: 'Archivo',
  intro: 'Trabajos de análisis y diseño de la facultad.',
  items: [
    {
      id: 'menu-accesible',
      title: 'Menú accesible',
      kind: 'UX y análisis',
      summary: 'Una app para que personas con discapacidad visual consulten la carta de restaurantes y comercios de forma autónoma, con lector de pantalla o en braille.',
      stack: ['Figma'],
      links: [{ label: 'Prototipo en Figma', href: 'https://www.figma.com/design/bIiDuIJXq5OaLRm0hMMGK0/Mockup-DS-Inclusivo?node-id=0-1' }],
      image: {
        key: 'menu-accesible',
        width: 982,
        height: 520,
        alt: 'Cuatro pantallas del prototipo: bienvenida con un ícono de ojo, elección entre cliente o local, tipos de locales y un registro en tres pasos.',
      },
    },
    {
      id: 'estacionamiento',
      title: 'Estacionamiento medido en City Bell',
      kind: 'Diseño y análisis',
      summary: 'Una app móvil para encontrar y pagar el estacionamiento medido, con aviso del tiempo restante.',
      stack: ['React Native', 'Figma'],
      links: [{ label: 'Código en GitHub', href: 'https://github.com/KaterinaMariescurren/aplicaciones_moviles' }],
      image: {
        key: 'estacionamiento',
        width: 982,
        height: 520,
        alt: 'Dos pantallas de la app: la bienvenida y el inicio, con los autos del usuario, los estacionamientos activos y el historial.',
      },
    },
  ],
};
