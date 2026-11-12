# Tasks — plano de implementação

Fase 3 do Spec-Driven Development. Cada tarefa termina com a verificação indicada. Marque `[x]` ao concluir.

## Fase 0 — Decisões (bloqueante para conteúdo)

- [x] T-00a Decisões de posicionamento, idiomas, conceito visual e hospedagem.
- [x] T-01 `requirements.md`, `DESIGN.md` e ADR-001 atualizados.
- [x] T-00b Empresa, regime, atuação, formação, papéis nos jogos, RPG e e-mail respondidos.
- [ ] T-00c Restante de [perguntas-abertas.md](../context/perguntas-abertas.md) (datas, Elementomaquia, resultados genéricos da CESS, mídia).

## Fase 1 — Fundação

- [x] T-10a `git init` local e `.gitignore`.
- [x] T-10b Repositório no GitHub `PedroCaurio/PedroCaurio.github.io` (serve na raiz `pedrocaurio.github.io`).
- [x] T-11 Scaffold Astro 7.4.11 + TypeScript strict + Tailwind v4.3 + sitemap + i18n (pt-br padrão, en). Node atualizado para 26 LTS. *Verif.: `npm run build` ok, 0 erros.*
- [x] T-12 ESLint 10 (typescript-eslint, eslint-plugin-astro) + Prettier (plugins astro e tailwind) + `scripts/check-tokens.mjs` (barra cores literais fora de `tokens.css`; testado com violação proposital). `eslint-plugin-jsx-a11y` ficou de fora por não suportar ESLint 10; acessibilidade coberta pelo axe.
- [x] T-13 `tokens.css` + `@theme` a partir do DESIGN.md; fontes self-hosted (Fontsource). *Verif.: `/dev/tokens` e `/` no navegador em 390 e 1280px, fontes carregadas, sem overflow horizontal, auditoria do Astro sem problemas.*
- [x] T-14 `.cursor/rules/` (conteudo, componentes-astro, testes) e skills `verify-in-browser` e `adding-content`.
- [x] T-15 Playwright 1.65 + axe (WCAG 2.2 AA) em 390px e 1280px, contra o build de produção. Fixtures: erros de console/rede, overflow horizontal, axe. *Verif.: 18 testes passando.* Lighthouse CI fica para T-51.
- [x] T-16 GitHub Actions: job `verify` (check + build + test, relatório como artefato em falha) em push/PR; `build` + `deploy` só em `main` e só se `verify` passar.

## Fase 2 — Conteúdo como dado

- [x] T-20 `content.config.ts` com 7 coleções Zod (profile, experience, education, skills, games, projects, rpg), campos `{ pt, en }`. *Verif.: schema rejeita e-mail inválido no build; `/dev/conteudo` renderiza tudo; teste garante ausência de "SGEM".*
- [x] T-21 Perfil, experiência (CESS), formação (FURG, IFRS) e skills preenchidos com dados confirmados.
- [ ] T-22 Projetos: estudo de caso do próprio site (rascunho pronto), `distributed-chat` (draft, falta papel/contexto), 1–2 casos genéricos da CESS (aguardando T-00c).
- [~] T-23 Jogos: 7 entradas com papel, sistemas e capas (`src/assets/games/`, otimizadas pelo `astro:assets`). Falta: loops de gameplay (MP4/WebM ≤ 1 MB).
- [x] T-24 RPG: Elementomaquia publicado (fantasia, magias elementais, pool de dados).

## Fase 3 — Páginas

- [~] T-30 `BaseLayout` com meta, OG, canonical, `hreflang`, JSON-LD `Person` e skip link. Falta: OG PNG e passar no validador de rich results.
- [x] T-31 Componentes `ui/` (`SectionHeading`, `Tag`, `ButtonLink`) e `layout/` (`Header`, `Footer`).
- [x] T-32 Home em `/` e `/en/` (`src/components/Home.astro` + `sections/`): hero com terminal e números, sobre, experiência, projetos, jogos, ficha de personagem, mesa de RPG, contato. *Verif.: 38 testes (e2e R-01, R-03, R-05, R-07, R-08, R-13, R-20 + axe) em 390/1280; screenshots conferidos.* Botão "Baixar CV" do R-01 entra com T-34.
- [ ] T-33 `/projetos/[slug]` e `/jogos/[slug]`. *Verif.: e2e R-04/R-05.*
- [ ] T-34 `/cv` + `build-pdf.ts`. *Verif.: copiar/colar texto do PDF mantém ordem; R-09/R-10.*
- [ ] T-35 `/como-foi-feito` (R-12).
- [ ] T-36 `404`.

## Fase 4 — Camada de máquina e extras

- [ ] T-40 `/llms.txt`, `/resume.json` (validar contra schema JSON Resume), sitemap, robots, OG PNG.
- [ ] T-41 `CommandPalette` (R-11). *Verif.: teclado, leitor de tela, Esc, sem JS o site continua ok.*
- [~] T-42 i18n EN (R-13): home em `/en/`, seletor de idioma e `hreflang` prontos; textos de interface em `src/i18n/ui.ts`. Falta estender às páginas futuras.

## Fase 5 — Polimento e lançamento

- [ ] T-50 Passe de "Harden": estados de fallback, reduced motion, 360–1920px.
- [ ] T-51 Lighthouse ≥ orçamentos (N-01, N-02).
- [ ] T-52 Revisão humana de texto e estética.
- [ ] T-53 Atualizar READMEs dos repositórios em destaque (GIF, como rodar, papel); corrigir placeholder do `Tower-Defense-LP`; checar `database.db` do repo de presença.
- [ ] T-54 Domínio (opcional), Search Console, link do site no GitHub/LinkedIn/itch.io.
