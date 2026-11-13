---
title: Este site
summary: Portfólio e currículo construídos com spec-driven development e agentes de IA. Uma única fonte de dados tipada alimenta as páginas nos dois idiomas e os dados estruturados para buscadores, e nada vai ao ar sem passar pela verificação automática.
role: Autor — especificação, arquitetura e direção dos agentes
order: 1
featured: true
context: Projeto pessoal
facts:
  - { label: Idiomas, value: PT-BR e EN }
  - { label: JS no cliente, value: zero }
  - { label: Deploy, value: GitHub Pages via CI }
stack: [Astro, TypeScript, Tailwind CSS, Zod, Playwright, axe, GitHub Actions, Cursor]
links:
  repo: https://github.com/PedroCaurio/PedroCaurio.github.io
  demo: https://pedrocaurio.github.io
---

## Problema

Um portfólio precisa convencer em poucos segundos e, ao mesmo tempo, sustentar um currículo em PDF legível por sistemas de triagem (ATS) e dados estruturados para buscadores e assistentes de IA. Mantidos à mão, esses três artefatos divergem rápido.

O segundo problema é de processo: com agentes de IA escrevendo boa parte do código, o risco deixa de ser "não conseguir fazer" e passa a ser "aceitar algo que parece pronto, mas inventa fatos, quebra a acessibilidade ou foge da identidade visual".

## Processo

O site foi construído em fases de **spec-driven development**, com cada fase versionada em `docs/` antes de virar código:

1. **Pesquisa.** Estado da arte em front-end com agentes, currículos ATS, portfólios de engenharia e de game dev, SEO para IA e tendências de design.
2. **Requisitos.** Requisitos funcionais (R-01 a R-23) e não funcionais (N-01 a N-07), com as decisões de produto registradas.
3. **Design técnico.** Arquitetura, rotas, modelo de conteúdo e um ADR justificando a stack.
4. **Tarefas.** Um plano por fases, em que cada tarefa termina com a verificação que prova que ela está pronta.
5. **Implementação com agentes.** Os agentes trabalham dentro de um harness que define fontes de verdade, proibições e o que conta como "pronto".
6. **Verificação.** Checagens estáticas, testes no navegador e conferência visual em dois tamanhos de tela antes de qualquer entrega.

## Harness para agentes

- **`AGENTS.md`** dá o contexto do projeto, os comandos e a definição de pronto.
- **Regras por escopo** para conteúdo, componentes e testes. A de conteúdo proíbe inventar fatos e lista os termos confidenciais.
- **Skills** com procedimentos repetíveis: verificar no navegador (390px e 1280px, console, acessibilidade) e adicionar conteúdo nos dois idiomas.

A ideia central é que **o agente não decide o que é verdade**. Fatos vivem em `docs/context/` e nas coleções de conteúdo; o agente só os apresenta.

## Conteúdo como dado

Todo texto factual fica em coleções tipadas com Zod (perfil, experiência, formação, habilidades, jogos, projetos e RPG), com campos `{ pt, en }`. Um campo faltando ou um e-mail inválido quebra o build, então um erro de conteúdo não chega ao ar. Os componentes só leem dados e textos de interface, sem nada escrito direto no código.

## Verificação

`npm run verify` é o mesmo comando local e no CI:

- `astro check`, ESLint e Prettier;
- uma checagem que barra cores literais fora do arquivo de tokens de design;
- testes Playwright em **390px e 1280px**, com **axe** (WCAG 2.2 AA), sem erros de console nem rolagem horizontal;
- testes de conteúdo que falham se aparecer um termo confidencial.

O deploy no GitHub Pages só acontece se a verificação passar.

## Decisões e trade-offs

- **Astro em vez de um framework SPA.** Site de conteúdo não precisa de JavaScript no cliente. O custo é ter que justificar cada ilha interativa.
- **Animações só em CSS.** Revelação ao rolar com `animation-timeline`, transições entre páginas com View Transitions e tudo desligado em `prefers-reduced-motion`. Navegadores sem suporte mostram o conteúdo estático, sem quebrar nada.
- **Paleta padrão do Tailwind desligada.** Só existem as cores dos tokens, o que mantém a identidade cinza, preto e laranja mesmo com vários agentes editando.
- **Plugin de acessibilidade do ESLint fora.** Ele não suporta ESLint 10; a cobertura veio do axe nos testes de navegador.

## Próximos passos

- Currículo em PDF gerado a partir dos mesmos dados, com coluna única para ATS.
- `llms.txt` e `resume.json` gerados no build.
- Paleta de comandos (`Ctrl+K`) como camada extra de navegação.
