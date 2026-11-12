# ADR-001 — Stack: Astro + Tailwind v4 + conteúdo tipado + deploy estático

- **Status:** Aceito (12/nov/2026) — hospedagem: GitHub Pages
- **Data:** 12/nov/2026

## Contexto

O site é um portfólio/currículo: conteúdo majoritariamente estático, pouca interatividade (paleta de comandos, vídeos), precisa ser muito rápido, acessível, legível por crawlers de IA e gerar um PDF ATS a partir dos mesmos dados. Será desenvolvido com agentes de IA no Cursor, então tipos fortes e convenções claras reduzem erros.

## Opções consideradas

| Opção | Prós | Contras |
| --- | --- | --- |
| **Astro 7** | Zero JS por padrão, content collections com Zod, ilhas, melhor CWV na população de sites | Menos "vitrine de React" |
| Next.js (static export) | Ecossistema React, bom se fosse app | 90–130 KB de runtime base, complexidade desnecessária |
| SvelteKit | Payload baixo, ótima DX | Menos referência para agentes, sem ganho claro aqui |
| HTML/CSS puro | Simplicidade máxima | Sem fonte única de dados → PDF, JSON-LD e llms.txt divergem |

## Decisão

Astro 7 + TypeScript strict + Tailwind CSS v4 (tokens em CSS variables) + Content Collections (Zod) + Playwright (testes e PDF) + deploy estático em GitHub Pages (ou Cloudflare Pages se houver domínio próprio).

## Consequências

- Conteúdo vive em `src/content/`; componentes só renderizam.
- Qualquer interatividade nova precisa justificar o JS (ilha explícita).
- O PDF depende do Chromium do Playwright no CI.
- Se no futuro surgir área logada/app, reavaliar (Next.js).
