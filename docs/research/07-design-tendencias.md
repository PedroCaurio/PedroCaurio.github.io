# Design — tendências e diferenciação (nov/2026)

## Conclusão

As tendências fortes de 2026 casam com a identidade do Pedro: **dark-first, alto contraste, um único acento laranja, tipografia monoespaçada, bordas finas, brilho contido, interações inspiradas em terminal e grades bento**. O risco é parecer template — e recrutadores reconhecem templates.

## Tendências observadas

- **Dark mode por padrão**, preferido pelo público dev. Recomendação forte: escolher **um** tema e aperfeiçoá-lo em vez de manter dois.
- **Um acento só** (laranja é citado explicitamente em vários portfólios de 2026).
- **Monoespaçada** para títulos/rótulos (JetBrains Mono, Space Mono, Fira Code).
- **Bento grid**: módulos assimétricos (12 colunas) para projetos, métricas, stack, contato.
- **Terminal / paleta de comandos** (`Ctrl+K`): navegação por comandos, easter eggs (`whoami`, `sudo`). Funciona como camada extra, não como única navegação.
- **Movimento sutil** e acessível: stagger em listas, View Transitions entre páginas, respeito a `prefers-reduced-motion`.
- **Textura leve**: grid ou ruído sutil no fundo.

## A "epidemia do template padrão" (evitar)

90% dos portfólios em threads de "roast my portfolio" compartilham: fundo `slate-900`, texto `slate-50`, acento `blue-500`, fonte Inter, bento grid, clone do v4 da Brittany Chiang. **Isso some no ruído.**

Antídoto: **design system programático** com tokens próprios + um conceito visual ligado à história do candidato.

## Mapeamento arquétipo → visual

| Arquétipo | Tipografia | Cor | Vibe |
| --- | --- | --- | --- |
| Sistemas/Backend | JetBrains Mono, Fira Code | Monocromático + 1 acento neon | Terminal, brutalista, alto contraste |
| Frontend/UX | Plus Jakarta Sans | Pastéis, P3 | Micro-interações |
| Dados/ML | Inter, Roboto Mono | Azuis, teal | Acadêmico, denso |

O Pedro é um híbrido **Sistemas/IA + Game Dev + RPG**. Isso sugere: base de terminal/engenharia (monocromático + laranja) com **toques lúdicos** controlados.

## Conceitos candidatos (decisão do Pedro — ver perguntas abertas)

1. **Terminal de engenharia** — sóbrio, mono, paleta de comandos, logs. Seguro e coerente com IA/sistemas.
2. **Ficha de personagem** — o currículo apresentado como ficha de RPG: "atributos" (skills), "classe" (Engenheiro de IA / Game Dev), "campanhas" (projetos), "conquistas". Altamente memorável e conectado à história do Pedro, mas precisa ser **sutil** para continuar profissional (metáfora em rótulos e layout, não fantasia medieval).
3. **Híbrido (recomendado)** — site sóbrio de engenharia como base; a metáfora de RPG aparece em pontos específicos (seção Game Dev/RPG, easter egg na paleta de comandos, card "ficha" no bento). Equilibra recrutador corporativo e estúdio de jogos.

## Acessibilidade (não negociável)

- WCAG 2.2 AA: contraste ≥ 4,5:1 texto normal, ≥ 3:1 texto grande/UI.
- Foco visível (anel laranja), navegação completa por teclado, skip link.
- `alt` em todas as imagens; vídeos mudos com controles ou pausáveis.
- `prefers-reduced-motion`: desligar animações não essenciais.
- Texto sobre laranja **deve ser escuro** (ver tokens em [DESIGN.md](../design/DESIGN.md)).
