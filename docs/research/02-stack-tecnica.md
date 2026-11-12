# Stack técnica para portfólio — estado da arte (nov/2026)

## Conclusão

**Astro + Tailwind CSS v4 + TypeScript, conteúdo em Content Collections validadas por Zod, deploy estático (GitHub Pages ou Cloudflare Pages).** É a recomendação quase unânime das fontes para sites de conteúdo como portfólio/CV.

## Por que Astro

- Pré-renderiza tudo para HTML e **envia zero JavaScript por padrão**; interatividade entra só onde é pedida ("ilhas").
- Content Collections: conteúdo em Markdown/JSON/YAML com schema tipado → uma fonte única para página, PDF, JSON-LD e `llms.txt`.
- Versão atual: **Astro 7.4.11** (11/nov/2026). Tailwind v4 integra via `@tailwindcss/vite`.

### Dados de performance citados

HTTP Archive (mobile, ago/2026), comparando populações de sites:

| Métrica | Astro | Next.js |
| --- | --- | --- |
| Core Web Vitals "bons" | 71,0% | 35,1% |
| LCP bom | 80,6% | 53,1% |
| JS mediano por página | 405 KB | 853 KB |

Benchmark de portfólio (mobile p75, Prasanga Pokharel): JS da home 11,4 KB (Astro) vs 94,2 KB (Next.js) vs 33,7 KB (SvelteKit); LCP 1,4 s vs 2,1 s vs 1,7 s.

> Ressalva das próprias fontes: são populações de sites, não um veredito puro sobre o framework.

### Quando NÃO usar Astro

Next.js é a escolha certa se o site for uma **aplicação** (login, dados por usuário, dashboard, checkout). Não é o caso de um portfólio.

## Stack recomendada (camada por camada)

| Camada | Escolha | Motivo |
| --- | --- | --- |
| Framework | Astro 7 | Estático, zero JS por padrão, content collections |
| Linguagem | TypeScript (strict) | Agentes erram menos com tipos |
| Estilo | Tailwind CSS v4 + CSS variables (tokens) | Rápido, consistente; tokens garantem a identidade |
| Ilhas interativas | Vanilla TS ou Preact (só se necessário) | Paleta de comandos, filtro de projetos |
| Animação | CSS + View Transitions do Astro; respeitar `prefers-reduced-motion` | Sem custo de runtime |
| Fontes | Self-host via Fontsource | Sem request ao Google Fonts, melhor LCP |
| Imagens | `astro:assets` (`<Image />`), AVIF/WebP | Otimização automática |
| Vídeo de gameplay | MP4/WebM curtos e mudos em vez de GIF | GIFs pesam e destroem LCP |
| Hospedagem | GitHub Pages (Actions) ou Cloudflare Pages | Grátis, CDN, deploy no push |
| Domínio | Opcional (ex.: `pedrocaurio.dev`) | Cloudflare Registrar é o mais barato |
| Analytics | Umami ou Plausible (opcional) | Leve e respeita privacidade |
| Contato | `mailto:` + links; formulário opcional via Web3Forms/Formspree | Sem backend |

## Qualidade e verificação

| Ferramenta | Uso |
| --- | --- |
| `astro check` + `tsc` | Tipos |
| ESLint + Prettier (com plugin Astro) | Estilo de código |
| Playwright | Testes E2E, screenshots 390/1280px, geração do PDF do currículo |
| `@axe-core/playwright` | Acessibilidade automatizada |
| Lighthouse CI | Orçamento: Performance ≥ 95, A11y = 100, SEO = 100 |
| GitHub Actions | Roda tudo no push e publica |

## Metas (Core Web Vitals "bons" do Google)

- LCP ≤ 2,5 s (meta interna: ≤ 1,5 s mobile)
- INP ≤ 200 ms
- CLS ≤ 0,1 (meta interna: 0)
- JS por página: meta ≤ 30 KB
