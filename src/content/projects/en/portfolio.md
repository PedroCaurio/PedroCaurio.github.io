---
title: This website
summary: Portfolio and resume built with spec-driven development and AI agents, using a single data source for the site, the PDF and the machine-readable files.
role: Author — specification, architecture and agent direction
order: 1
featured: true
stack: [Astro, TypeScript, Tailwind CSS, Zod, Playwright, axe, GitHub Actions, Cursor]
links:
  repo: https://github.com/PedroCaurio/PedroCaurio.github.io
  demo: https://pedrocaurio.github.io
---

## Problem

A portfolio has to convince in seconds while also backing an ATS-readable PDF resume and structured data for search engines and AI assistants. Maintained by hand, those three artifacts drift apart.

## Approach

- **Spec-driven development:** research, requirements, technical design and tasks versioned in `docs/` before any code.
- **Agent harness:** `AGENTS.md`, Cursor rules and skills define sources of truth, prohibitions and what "done" means.
- **Content as data:** Zod-typed collections feed pages, PDF, JSON-LD and `llms.txt`.
- **Automated verification:** lint, design-token checks and Playwright tests with axe at 390px and 1280px run in CI before every deploy.
