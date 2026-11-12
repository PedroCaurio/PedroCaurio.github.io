---
title: Este site
summary: Portfólio e currículo construídos com spec-driven development e agentes de IA, com uma única fonte de dados para o site, o PDF e os arquivos para máquinas.
role: Autor — especificação, arquitetura e direção dos agentes
order: 1
featured: true
stack: [Astro, TypeScript, Tailwind CSS, Zod, Playwright, axe, GitHub Actions, Cursor]
links:
  repo: https://github.com/PedroCaurio/PedroCaurio.github.io
  demo: https://pedrocaurio.github.io
---

## Problema

Um portfólio precisa convencer em poucos segundos e, ao mesmo tempo, sustentar um currículo PDF legível por sistemas de triagem e dados estruturados para buscadores e assistentes de IA. Mantidos à mão, esses três artefatos divergem.

## Abordagem

- **Spec-driven development:** pesquisa, requisitos, design técnico e tarefas versionados em `docs/` antes de qualquer código.
- **Harness para agentes:** `AGENTS.md`, regras e skills do Cursor definem fontes de verdade, proibições e o que conta como "pronto".
- **Conteúdo como dado:** coleções tipadas com Zod alimentam páginas, PDF, JSON-LD e `llms.txt`.
- **Verificação automática:** lint, checagem de tokens de design, testes Playwright com axe em 390px e 1280px no CI antes de cada deploy.
