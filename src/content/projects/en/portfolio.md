---
title: This website
summary: Portfolio and resume built with spec-driven development and AI agents. A single typed data source feeds the pages in both languages and the structured data for search engines, and nothing ships without passing automated verification.
role: Author — specification, architecture and agent direction
order: 1
featured: true
context: Personal project
facts:
  - { label: Languages, value: PT-BR and EN }
  - { label: Client-side JS, value: none }
  - { label: Deploy, value: GitHub Pages via CI }
stack: [Astro, TypeScript, Tailwind CSS, Zod, Playwright, axe, GitHub Actions, Cursor]
links:
  repo: https://github.com/PedroCaurio/PedroCaurio.github.io
  demo: https://pedrocaurio.github.io
---

## Problem

A portfolio has to convince in seconds while also backing an ATS-readable PDF resume and structured data for search engines and AI assistants. Maintained by hand, those three artifacts drift apart fast.

The second problem is about process: with AI agents writing much of the code, the risk is no longer "not being able to build it" but "accepting something that looks done while it invents facts, breaks accessibility or drifts from the visual identity".

## Process

The site was built in **spec-driven development** phases, each one versioned in `docs/` before turning into code:

1. **Research.** State of the art in front-end with agents, ATS resumes, engineering and game dev portfolios, SEO for AI and design trends.
2. **Requirements.** Functional (R-01 to R-23) and non-functional (N-01 to N-07) requirements, with product decisions recorded.
3. **Technical design.** Architecture, routes, content model and an ADR justifying the stack.
4. **Tasks.** A phased plan where every task ends with the check that proves it is done.
5. **Implementation with agents.** Agents work inside a harness that defines sources of truth, prohibitions and what counts as "done".
6. **Verification.** Static checks, browser tests and visual review at two screen sizes before anything ships.

## Agent harness

- **`AGENTS.md`** provides project context, commands and the definition of done.
- **Scoped rules** for content, components and tests. The content rule forbids inventing facts and lists confidential terms.
- **Skills** with repeatable procedures: verifying in the browser (390px and 1280px, console, accessibility) and adding content in both languages.

The core idea is that **the agent does not decide what is true**. Facts live in `docs/context/` and the content collections; the agent only presents them.

## Content as data

Every factual text lives in Zod-typed collections (profile, experience, education, skills, games, projects and RPG) with `{ pt, en }` fields. A missing field or an invalid email breaks the build, so a content error never ships. Components only read data and UI strings; nothing is hardcoded.

## Verification

`npm run verify` is the same command locally and in CI:

- `astro check`, ESLint and Prettier;
- a check that blocks literal colors outside the design token file;
- Playwright tests at **390px and 1280px** with **axe** (WCAG 2.2 AA), no console errors and no horizontal scroll;
- content tests that fail if a confidential term appears.

Deployment to GitHub Pages only happens when verification passes.

## Decisions and trade-offs

- **Astro instead of an SPA framework.** A content site needs no client-side JavaScript. The cost is having to justify every interactive island.
- **CSS-only animation.** Scroll reveals with `animation-timeline`, page transitions with View Transitions and everything turned off under `prefers-reduced-motion`. Browsers without support show static content without breaking.
- **Tailwind's default palette disabled.** Only token colors exist, which keeps the gray, black and orange identity intact even with several agents editing.
- **ESLint accessibility plugin left out.** It does not support ESLint 10; coverage comes from axe in the browser tests.

## Next steps

- A PDF resume generated from the same data, single-column for ATS.
- `llms.txt` and `resume.json` generated at build time.
- A command palette (`Ctrl+K`) as an extra navigation layer.
