# SEO e visibilidade para IA (nov/2026)

## Conclusão

A busca se dividiu em duas: o **índice clássico** (Google/Bing) e os **motores de resposta** (ChatGPT, Claude, Perplexity), que recrutadores já usam ("quem são engenheiros juniores de IA no RS?"). Motores de resposta citam fontes **fáceis de citar**: entidades claras, relações explícitas, fatos estruturados. Um portfólio bonito com tudo implícito em JavaScript é invisível para eles.

Todos os artefatos abaixo devem ser **gerados da mesma fonte de conteúdo** para nunca divergirem.

## Artefatos

| Artefato | Conteúdo |
| --- | --- |
| HTML semântico pré-renderizado | Astro já entrega; `h1` único, landmarks, `lang` correto |
| Meta tags + Open Graph/Twitter | Título, descrição, `og:image` **PNG/JPG 1200×630** (SVG não funciona em várias redes) |
| JSON-LD `Person` | `@id` estável (`https://<dominio>/#person`), `name`, `jobTitle`, `alumniOf`, `knowsAbout` (skills), `image`, `sameAs` (GitHub, LinkedIn, itch.io) |
| JSON-LD por projeto | `SoftwareSourceCode` / `VideoGame` / `CreativeWork` com `author: { "@id": ".../#person" }` |
| `ProfilePage` | Na página "Sobre", com `mainEntity` = a Person |
| `/llms.txt` | Spec llmstxt.org: `# Nome`, `> resumo`, seções `##` com `- [Título](url): descrição` |
| `/llms-full.txt` (opcional) | Versão longa em Markdown com detalhes dos projetos |
| `/resume.json` | JSON Resume (ver doc 03) |
| `sitemap.xml` | `@astrojs/sitemap` |
| `robots.txt` | Liberar explicitamente `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended` |
| `hreflang` | Se houver PT-BR e EN |
| Canonical URL | Em toda página |

## Exemplo de `llms.txt`

```markdown
# Pedro Caurio

> Estudante de Engenharia de Computação (4º ano, CR 9,2) e Analista de Projetos de Software
> focado em arquitetura de IA com agentes, MCP e spec-driven development. Também desenvolve jogos
> (Unity, Godot) e sistemas de RPG de mesa.

## Páginas
- [Sobre](https://<dominio>/sobre): trajetória, formação e experiência
- [Currículo PDF](https://<dominio>/cv/pedro-caurio.pdf): versão ATS

## Projetos
- [Midnight Meow](https://<dominio>/projetos/midnight-meow): roguelite de ação multiplayer em Unity (GameJamPlus 2025/26)
```

## Indexação

- Google Search Console + sitemap.
- IndexNow (Bing e família) para indexar em horas — pode ser um GitHub Action no deploy.
- Link do site no perfil do GitHub, LinkedIn e itch.io (consistência de entidade via `sameAs`).
