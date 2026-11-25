# Para revisar antes de publicar

Todo el texto está en `src/content/es/` y `src/content/en/`.

## 1. CV

`public/CV_Bruno_Santillan.pdf` es el **CV general** ("Desarrollo Full Stack y Análisis Funcional"). Las habilidades técnicas y blandas del sitio (`skills.ts`) salen de ese CV. Si lo cambiás, actualizá también `skills.ts`.

Diferencias entre el CV y el portfolio que conviene corregir en el CV:

| # | En el CV | En el portfolio | Por qué |
|---|---|---|---|
| 1 | Los Ciruelos: "dockerización para despliegue" | No lo menciona | El repo no tiene Dockerfile; el docker-compose solo levanta PostgreSQL para desarrollo. |
| 2 | Componentes "utilizados por distintas secretarías provinciales" | "Todavía no está en uso público" | Me dijiste que todavía no está en uso público. Aclaralo en uno de los dos. |
| 3 | No figura el curso que dictás | Aparece en Trayectoria y Accesibilidad | Si lo dictás, sumalo al CV. |
| 4 | No figura Sass | Aparece en Habilidades | Sale del sistema de diseño. |

## 2. Datos para confirmar

| # | Dato | Dónde |
|---|---|---|
| 1 | Pasá la Página: período "desde mar 2025" | `cases.ts` |
| 2 | Decisiones técnicas de IoT, YPF y Pasá la Página (las de Los Ciruelos salen del repo) | `cases.ts` |
| 3 | Curso que dictás: período sep 2025 – hoy y temario | `trayectoria.ts`, `site.ts` |
| 4 | Los repos `LosCiruelos-Backend` y `pasa_la_pagina_backend` son **públicos** y están enlazados | `cases.ts` |
| 5 | YPF: la lista "Qué construí" y el diagrama genérico no rompen la confidencialidad | `cases.ts`, `Diagram.tsx` |

## 3. Imágenes

- **Pasá la Página**: la captura muestra nombres de personas en reseñas y chat. Si no tenés su permiso, mandame una con datos de prueba o los difumino.
- **Los Ciruelos**: hoy lleva un diagrama de arquitectura. Si mandás capturas (reserva del socio, grilla del panel, caja, configuración) sin datos reales, las sumo.
- **Sistema de diseño e IoT**: sin capturas, por confidencialidad.

## 4. Inglés

Revisá sobre todo: "Information Systems Engineer", "Systems Analyst degree", "Teaching assistant, Calculus II" (Análisis II suele equivaler a *Multivariable Calculus*) y el nombre del curso.

## 5. Accesibilidad: lo que falta probar a mano

Lo automático está cubierto (axe, teclado, contraste, targets, movimiento reducido). Falta una pasada con **lector de pantalla real** (NVDA + Chrome y VoiceOver en iOS), sobre todo en el mapa del hero. Después agregala a la declaración (`a11y.statement.howTested` en `site.ts`).
