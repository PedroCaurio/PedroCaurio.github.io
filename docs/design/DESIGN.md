# DESIGN.md — Design system do site

Fonte única de verdade visual. Os valores abaixo serão implementados em `src/styles/tokens.css` como CSS variables e expostos ao Tailwind v4 via `@theme`. **Nenhuma cor, fonte ou raio fora destes tokens.**

## Identidade

Herdada do README do GitHub do Pedro: **laranja `#FF751F` + cinza `#212121` + branco**, fonte **Space Mono**. Tema **dark único** (sem light mode na v1).

## Conceito híbrido

Decidido em 12/nov/2026. A base é um site **sóbrio de engenharia** (terminal, mono, bordas finas). A metáfora de **RPG** aparece só em pontos controlados:

| Onde | Como |
| --- | --- |
| Rótulos de seção | Prefixo de terminal: `> experiencia`, `01 // projetos`. Sem linguagem de fantasia. |
| Skills | `SkillSheet` em formato de "ficha": grupos como atributos (ex.: `INT · IA & Agentes`), listando tecnologias. Sem números ou barras inventados. |
| Seção Jogos/RPG | Aqui a metáfora pode ser mais explícita ("Campanhas", "Sistemas"), pois é o contexto natural. |
| Paleta de comandos | Easter eggs: `whoami`, `roll d20`, `sudo hire pedro`. |
| 404 | "Você rolou 1 no teste de navegação." |

Regra: um recrutador corporativo que nunca jogou RPG deve entender tudo sem estranhar.

## Cores

| Token | Valor | Uso |
| --- | --- | --- |
| `--color-bg` | `#121212` | Fundo da página |
| `--color-surface` | `#1A1A1A` | Seções alternadas |
| `--color-card` | `#212121` | Cards, badges (cinza da identidade) |
| `--color-card-hover` | `#2A2A2A` | Hover de cards |
| `--color-border` | `#333333` | Bordas finas (1px) |
| `--color-text` | `#F5F5F5` | Texto principal |
| `--color-text-muted` | `#A3A3A3` | Texto secundário, metadados |
| `--color-text-faint` | `#737373` | **Só decorativo** (numeração, ornamentos). Nunca texto informativo. |
| `--color-accent` | `#FF751F` | Laranja da identidade: links, destaques, foco, botão primário |
| `--color-accent-hover` | `#FF8F45` | Hover do acento |
| `--color-on-accent` | `#121212` | **Texto sobre fundo laranja** (obrigatório) |

### Contrastes verificados (WCAG 2.2)

| Combinação | Razão | Resultado |
| --- | --- | --- |
| `text` sobre `bg` | 17,18:1 | AAA |
| `text` sobre `card` | 14,77:1 | AAA |
| `text-muted` sobre `card` | 6,38:1 | AA |
| `accent` sobre `bg` | 6,97:1 | AA |
| `accent` sobre `card` | 5,99:1 | AA |
| `on-accent` sobre `accent` | 6,97:1 | AA |
| `text-faint` sobre `card` | 3,40:1 | **Reprova para texto** — só decoração |
| Branco sobre `accent` | 2,46:1 | **Proibido** |

## Tipografia

| Token | Fonte | Uso |
| --- | --- | --- |
| `--font-mono` | Space Mono (400, 700) | Títulos de seção, rótulos, metadados, paleta de comandos, tags |
| `--font-sans` | Space Grotesk (400, 500, 700) | Corpo de texto e títulos grandes (derivada da Space Mono → coerência) |

Self-host via Fontsource (`@fontsource/space-mono`, `@fontsource-variable/space-grotesk`), `font-display: swap`, preload só do peso usado acima da dobra.

Escala fluida (`clamp`): `--text-xs` 0,75rem · `--text-sm` 0,875rem · `--text-base` 1rem · `--text-lg` 1,125rem · `--text-xl` 1,25rem · `--text-2xl` 1,5rem · `--text-3xl` clamp(1,75rem, 3vw, 2,25rem) · `--text-display` clamp(2,5rem, 6vw, 4,5rem).

Comprimento de linha do corpo: 60–75 caracteres (`max-width: 68ch`).

## Espaçamento, raio, sombra

- Espaçamento: escala de 4px do Tailwind. Seções: `py-24` desktop, `py-16` mobile.
- Raio: `--radius-sm` 4px (tags), `--radius-md` 8px (botões), `--radius-lg` 12px (cards). Combina com o `border_radius=10` dos cards do GitHub.
- Sombra: praticamente nenhuma. Profundidade vem de borda + mudança de superfície. Brilho laranja **só** no foco/hover do CTA (`0 0 0 1px accent, 0 0 24px -8px accent`).
- Textura de fundo: grid sutil de 32px em `--color-border` com opacidade baixa (opcional, desligável).

## Movimento

- Durações: 150ms (hover), 250ms (entrada), 400ms (transição de página).
- Easing: `cubic-bezier(0.2, 0.8, 0.2, 1)`.
- Entrada de listas com stagger de 40ms.
- View Transitions do Astro entre páginas.
- `@media (prefers-reduced-motion: reduce)`: remove animações não essenciais e o cursor piscante.

## Componentes base (a criar em `src/components/ui/`)

| Componente | Notas |
| --- | --- |
| `Button` | Variantes: `primary` (fundo accent, texto on-accent), `ghost` (borda, texto text), `link`. Foco: anel accent 2px com offset. |
| `Tag` | Mono, `text-xs`, fundo card, borda border. Para stack/engine. |
| `Card` | Fundo card, borda border, raio lg, hover card-hover + borda accent. |
| `SectionHeading` | Mono, prefixo decorativo em accent (ex.: `01 //` ou `>`), título sans. |
| `ProjectCard` | Mídia (imagem/loop de vídeo), título, uma linha, tags, papel, links. |
| `Timeline` | Experiência e formação. |
| `CommandPalette` | `Ctrl+K` / `⌘K`. Ilha interativa. Navegação + easter eggs. Acessível (role dialog, focus trap, Esc). |
| `SkillSheet` | (Conceito híbrido/RPG) ficha de "atributos" com grupos de skills. Sem barras de porcentagem inventadas. |

## Proibições

- Cores hex/rgb fora de `tokens.css`.
- Barras de "nível de skill" em porcentagem (não significam nada para recrutador).
- Texto branco sobre laranja.
- GIFs pesados acima da dobra.
- Fontes carregadas do Google Fonts via CDN.
- Light mode na v1.
