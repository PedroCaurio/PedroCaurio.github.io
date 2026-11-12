---
name: adding-content
description: Adiciona ou edita conteúdo do portfólio (jogo, projeto, experiência, formação, skill, sistema de RPG) nas coleções tipadas em PT-BR e EN. Use quando o Pedro pedir para incluir, atualizar ou remover um jogo, projeto, emprego, curso ou habilidade.
---

# Adicionar conteúdo

## Onde fica cada coisa

| Tipo                  | Arquivo                                  | Formato                                     |
| --------------------- | ---------------------------------------- | ------------------------------------------- |
| Perfil, e-mail, redes | `src/content/profile.yaml`               | 1 entrada `id: pedro`                       |
| Experiência           | `src/content/experience.yaml`            | lista com `id`                              |
| Formação              | `src/content/education.yaml`             | lista com `id`                              |
| Habilidades           | `src/content/skills.yaml`                | lista com `id` e `attribute` (toque de RPG) |
| Jogos                 | `src/content/games.yaml`                 | lista com `id` (slug)                       |
| Projetos de software  | `src/content/projects/{pt,en}/<slug>.md` | frontmatter + estudo de caso                |
| RPG                   | `src/content/rpg.yaml`                   | lista com `id`                              |

Schemas: `src/content.config.ts`.

## Passos

1. Junte os fatos. Faltou algo? Pergunte ao Pedro; não invente. Aplique a regra `.cursor/rules/conteudo.mdc` (inclui confidencialidade da CESS).
2. Escreva `pt` e `en` com o mesmo significado.
3. Defina `order` (menor aparece primeiro) e `featured`.
4. Projetos: estudo de caso com **Problema, Restrições, Decisão/trade-off, Resultado, Papel** (300–600 palavras). Confidencial: `confidential: true`, sem links de código.
5. Jogos: liste os sistemas que o Pedro programou em `contributions`; credite o time; prêmios em `jam.awards` só como a jam reportou.
6. Valide: `npm run check` (schema) e confira em `/dev/conteudo` no navegador.
7. Atualize `docs/context/` se o fato for novo.

## Exemplo (jogo)

```yaml
- id: novo-jogo
  title: Novo Jogo
  order: 8
  engine: Godot
  language: GDScript
  genre: { pt: Puzzle, en: Puzzle }
  summary: { pt: Uma frase sobre o jogo., en: One sentence about the game. }
  role: { pt: Programador, en: Programmer }
  contributions:
    pt: [Sistema de puzzles.]
    en: [Puzzle system.]
  links:
    itch: https://exemplo.itch.io/novo-jogo
```
