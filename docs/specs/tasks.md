# Tasks — plano de implementação

Fase 3 do Spec-Driven Development. Cada tarefa termina com a verificação indicada. Marque `[x]` ao concluir.

## Fase 0 — Decisões (bloqueante para conteúdo)

- [x] T-00a Decisões de posicionamento, idiomas, conceito visual e hospedagem.
- [x] T-01 `requirements.md`, `DESIGN.md` e ADR-001 atualizados.
- [ ] T-00b Pedro responde o restante de [perguntas-abertas.md](../context/perguntas-abertas.md) (experiência, formação, papéis nos jogos, RPG, e-mail).

## Fase 1 — Fundação

- [x] T-10a `git init` local e `.gitignore`.
- [x] T-10b Repositório no GitHub `PedroCaurio/PedroCaurio.github.io` (serve na raiz `pedrocaurio.github.io`).
- [x] T-11 Scaffold Astro 7.4.11 + TypeScript strict + Tailwind v4.3 + sitemap + i18n (pt-br padrão, en). Node atualizado para 26 LTS. *Verif.: `npm run build` ok, 0 erros.*
- [ ] T-12 ESLint + Prettier; regra que proíbe cores literais fora de `tokens.css`. (`astro check` já está no build.) Obs.: a paleta padrão do Tailwind já está desligada em `tokens.css` (`--color-*: initial`).
- [x] T-13 `tokens.css` + `@theme` a partir do DESIGN.md; fontes self-hosted (Fontsource). *Verif.: `/dev/tokens` e `/` no navegador em 390 e 1280px, fontes carregadas, sem overflow horizontal, auditoria do Astro sem problemas.*
- [ ] T-14 `.cursor/rules/` (astro, estilo, conteúdo) e skill `verify-in-browser`.
- [ ] T-15 Playwright + axe + Lighthouse CI configurados com um teste fumaça. *Verif.: `npm run test` ok.*
- [~] T-16 GitHub Actions: `.github/workflows/deploy.yml` (withastro/action@v6, Node 26) faz check + build + deploy no push em `main`. Falta o passo de testes (depende de T-15).

## Fase 2 — Conteúdo como dado

- [ ] T-20 `content.config.ts` com schemas Zod (profile, projects, games, rpg).
- [ ] T-21 `profile.json` preenchido com dados confirmados.
- [ ] T-22 Projetos: escrever 2–4 estudos de caso (começar por `distributed-chat` e o próprio site; adicionar trabalho de Analista se liberado).
- [ ] T-23 Jogos: 6 entradas, com papel confirmado; capturar loops de gameplay (MP4/WebM ≤ 1 MB) e covers.
- [ ] T-24 RPG: 1–2 entradas.

## Fase 3 — Páginas

- [ ] T-30 `BaseLayout` (head, meta, OG, JSON-LD Person, skip link). *Verif.: validador de rich results.*
- [ ] T-31 Componentes `ui/`. *Verif.: navegador 390/1280, foco por teclado.*
- [ ] T-32 Seções da home (R-01..R-08). *Verif.: e2e R-01..R-08 + axe + screenshots.*
- [ ] T-33 `/projetos/[slug]` e `/jogos/[slug]`. *Verif.: e2e R-04/R-05.*
- [ ] T-34 `/cv` + `build-pdf.ts`. *Verif.: copiar/colar texto do PDF mantém ordem; R-09/R-10.*
- [ ] T-35 `/como-foi-feito` (R-12).
- [ ] T-36 `404`.

## Fase 4 — Camada de máquina e extras

- [ ] T-40 `/llms.txt`, `/resume.json` (validar contra schema JSON Resume), sitemap, robots, OG PNG.
- [ ] T-41 `CommandPalette` (R-11). *Verif.: teclado, leitor de tela, Esc, sem JS o site continua ok.*
- [ ] T-42 i18n EN (R-13).

## Fase 5 — Polimento e lançamento

- [ ] T-50 Passe de "Harden": estados de fallback, reduced motion, 360–1920px.
- [ ] T-51 Lighthouse ≥ orçamentos (N-01, N-02).
- [ ] T-52 Revisão humana de texto e estética.
- [ ] T-53 Atualizar READMEs dos repositórios em destaque (GIF, como rodar, papel); corrigir placeholder do `Tower-Defense-LP`; checar `database.db` do repo de presença.
- [ ] T-54 Domínio (opcional), Search Console, link do site no GitHub/LinkedIn/itch.io.
