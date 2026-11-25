# Para revisar antes de publicar

Todo el texto está en `src/content/es/` y `src/content/en/`. Cada punto indica el archivo.

## 1. Datos que tenés que confirmar

No inventé experiencia, pero algunos detalles los deduje del sitio anterior o de las capturas. Confirmalos o corregilos:

| # | Dato | Dónde | De dónde salió |
|---|---|---|---|
| 1 | YPF: **jun – sep 2025** | `cases.ts`, `trayectoria.ts` | Sitio anterior. |
| 2 | Los Ciruelos: período **2024 – 2025** y tu rol ("desarrollo full stack dentro de un equipo, con análisis y entrevistas al club") | `cases.ts` | La fecha de la captura (09/03/2025) y los chips del sitio anterior. ¿Qué parte hiciste vos? |
| 3 | Pasá la Página: rol "backend, app móvil e infraestructura" y la lista "Qué construí" | `cases.ts` | Los chips del sitio anterior. ¿Hiciste todo o una parte? |
| 4 | **Decisiones técnicas** de los 4 casos | `cases.ts` | Las redacté a partir de lo que construiste. Confirmá que el razonamiento sea el tuyo. |
| 5 | IoT: estado "En curso" | `cases.ts` | Supuesto. |
| 6 | Curso que dictás: período **sep 2025 – hoy** y temario ("semántica, teclado, contraste, formularios y pruebas con lector de pantalla") | `trayectoria.ts`, `site.ts` | Supuesto. |
| 7 | Analista Universitario de Sistemas: ¿también 2026? | `trayectoria.ts` | El brief dice "UTN FRLP, 2026" para ambos títulos. |
| 8 | Stack sin caso asociado: React, HTML/CSS, PostgreSQL, Grafana, Git, Figma, UML/BPMN, Scrum/Kanban | `shared.ts` | Aparecen como "Fuera de estos casos". Si alguno se usó en un caso, agregá el id en `usedIn`. |
| 9 | YPF: la lista "Qué construí" y el diagrama genérico | `cases.ts`, `Diagram.tsx` | Solo describe lo que entregaste, sin procesos ni datos. Confirmá que no rompe la confidencialidad. |
| 10 | **Sistema de diseño accesible (DPID)**: hoy tiene solo lo que me contaste. Faltan tecnología, qué componentes hiciste, desde cuándo, si hay Storybook o documentación, decisiones técnicas y si se puede mostrar alguna captura | `cases.ts` | Lo que me contaste. El período "Desde 2025" sale de tu fecha de ingreso a la DPID. |
| 11 | **Los Ciruelos**: el caso describe la versión del equipo, no tu reingeniería | `cases.ts` | Pendiente: pasá el prompt de `docs/PROMPT-resumen-proyecto.md` en el repo y mandame la respuesta y las capturas. |

## 2. Imágenes

- **Pasá la Página**: la captura muestra nombres de personas en reseñas y chat (p. ej. "Martín Sitnyk", "Lautaro Frías"). Si no tenés su permiso, mandame una captura con datos de prueba o los difumino.
- **IoT (DPID)**: hoy va un diagrama propio. ¿Qué se puede mostrar públicamente? Si hay capturas del dashboard sin datos sensibles, mejoran mucho el caso.
- **YPF**: queda solo el diagrama propio, sin capturas.
- **Foto**: el sitio no lleva foto.

## 3. CV

`public/CV_Bruno_Santillan.pdf` es **una copia del CV anterior** con el nombre nuevo, para que el link no quede roto. Reemplazalo por el actualizado (mismo nombre de archivo).

## 4. Inglés: textos para revisar

El inglés está escrito para que suene natural, no traducido palabra por palabra. Estas son las decisiones que más conviene mirar:

| Español | Inglés | Nota |
|---|---|---|
| Ingeniero en Sistemas | Systems Engineer / "Systems Engineering degree (Ingeniero en Sistemas)" | Otra opción: "Information Systems Engineer". |
| Analista Universitario de Sistemas | Systems Analyst degree | |
| Licenciatura en Inteligencia Artificial | BSc in Artificial Intelligence | |
| Ayudante de cátedra de Análisis Matemático II | Teaching assistant, Calculus II | Análisis II suele equivaler a *Multivariable Calculus*. |
| Dirección Provincial de Innovación Digital (PBA) | Provincial Directorate of Digital Innovation (Buenos Aires) | |
| Inspección de Equipos Estáticos | Static Equipment Inspection | |
| Práctica Profesional | Professional internship | |
| «Desarrollo web accesible: fundamentos y buenas prácticas para equipos técnicos» | “Accessible web development: fundamentals and good practices for technical teams” | Si el curso tiene nombre oficial en inglés, usá ese. |
| Construyo software accesible y herramientas de datos para operaciones reales. | I build accessible software and data tools for real-world operations. | Frase principal. |
| Stack, con evidencia | Stack, with evidence | |

## 5. Accesibilidad: lo que falta probar a mano

Lo automático está cubierto (axe, teclado, contraste, targets, movimiento reducido). No pude probar con un **lector de pantalla real**. Recomiendo una pasada con NVDA + Chrome y VoiceOver en iOS, sobre todo en el mapa del hero. Después agregala a la declaración (`a11y.statement.howTested` en `site.ts`).
