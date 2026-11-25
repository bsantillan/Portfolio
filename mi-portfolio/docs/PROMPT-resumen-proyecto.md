# Prompt para resumir un proyecto privado

Pegalo en una IA que tenga acceso al repositorio (por ejemplo, Claude Code abierto en la carpeta del proyecto). Devolveme la respuesta tal cual y con eso armo el caso del portfolio.

---

Analizá este repositorio y escribí un resumen del proyecto para un caso de estudio de mi portfolio. Basate solo en lo que puedas comprobar en el código, la configuración, la documentación y el historial de git. Si algo no se puede saber desde el repo, escribí "No consta" en lugar de suponerlo.

Contexto: el proyecto es un sistema de reservas de canchas de pádel para el club Los Ciruelos. Describí solo la versión actual. Mi usuario de git es el que aparece como autor de los commits más recientes; confirmalo con `git log`.

Respondé en español, en Markdown, con estas secciones:

1. **Qué es y qué resuelve** (2–3 oraciones): para quién es y qué problema concreto resuelve.
2. **Funcionalidades**: lista de lo que hace hoy, agrupada por tipo de usuario (por ejemplo socio, administrador o club).
3. **Arquitectura**: cómo está organizado (frontend, backend, base de datos, servicios externos, despliegue) y cómo se comunican las partes. Si sirve, agregá un diagrama en texto.
4. **Stack**: tecnologías y versiones principales, sacadas de los archivos de dependencias. Marcá las 6 más importantes.
5. **Metodología y calidad**: tests (tipo y cantidad aproximada), CI/CD, linters, convenciones, gestión de tareas y documentación. Solo lo que esté en el repo.
6. **Antes y después de la reingeniería**: qué cambió en arquitectura, stack y funcionalidades entre la versión del equipo y la actual. Usá el historial de git para ubicar el corte y dame fechas aproximadas.
7. **Qué hice yo**: lo que muestran mis commits frente a los del resto del equipo.
8. **Decisiones técnicas**: 3 a 5 decisiones visibles en el código, cada una con el porqué si se deduce (por ejemplo, de un README, un ADR o un mensaje de commit). Si el porqué no consta, decilo.
9. **Estado actual**: si está en producción o en uso, qué falta y qué está a medias (TODOs, ramas abiertas, issues).
10. **Qué mostrar**: 3 a 4 pantallas o flujos que conviene capturar para el portfolio.

Reglas:
- No incluyas secretos, claves, URLs internas, variables de entorno ni datos reales de personas (nombres, teléfonos, emails, reservas).
- No copies bloques de código largos: describí.
- Sé concreto y breve, sin lenguaje de marketing.
