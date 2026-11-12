# Requirements — Site Currículo/Portfólio

Fase 1 do Spec-Driven Development. Status: **estrutura aprovada; conteúdo depende das [perguntas abertas](../context/perguntas-abertas.md)**.

## Decisões de produto (12/nov/2026)

- **Posicionamento:** engenharia de software / arquitetura de IA com agentes. Game dev e RPG são diferenciais, não o foco. Ordem da home: Hero → Sobre → Experiência → Projetos → Jogos → RPG → Skills → Contato.
- **Idiomas:** PT-BR padrão em `/`, EN em `/en/` (R-13 obrigatório).
- **Conceito visual:** híbrido (ver [DESIGN.md](../design/DESIGN.md#conceito-híbrido)).
- **Hospedagem:** GitHub Pages em `https://pedrocaurio.github.io`.

## Objetivo

Um site estático, rápido e acessível que permita a um recrutador ou líder técnico entender **quem é o Pedro, o que ele faz e por que vale uma entrevista em até 15 segundos**, e que sirva como fonte única para o currículo PDF.

## Públicos

| Público | Quer | Sucesso |
| --- | --- | --- |
| Recrutador (não técnico) | Papel, formação, experiência, CV para baixar | Baixa o PDF ou clica em contato |
| Líder técnico / engenheiro | Profundidade: decisões, arquitetura, código | Abre um estudo de caso e o repositório |
| Estúdio de jogos | Jogos jogáveis, papel em cada um | Joga no itch.io |
| Motores de resposta de IA | Fatos estruturados | Cita corretamente o Pedro |

## Requisitos funcionais

Numeração usada nos testes (`R-xx`).

- **R-01 Hero**: nome, papel, frase de posicionamento, CTAs "Baixar CV", "GitHub", "LinkedIn", "Contato". Visível sem rolagem em 390×844 e 1280×800.
- **R-02 Sobre**: resumo curto, formação (Eng. Computação, CR 9,2; Técnico em Automação Industrial), diferencial (IA + jogos + RPG).
- **R-03 Experiência**: timeline com Analista de Projetos de Software na **CESS** e bullets no formato PRTO, respeitando o contrato de confidencialidade (sem clientes, dados ou métricas internas; ver regras em [perfil.md](../context/perfil.md#experiência-profissional)).
- **R-04 Projetos de software**: 2–4 destaques em cards → página de estudo de caso (problema, restrições, decisão/trade-off, resultado, papel, stack, links). Lista secundária "outros projetos" compacta.
- **R-05 Jogos**: grade com mídia animada, engine, papel, sistemas programados, time, jam/prêmios, link para itch.io. Páginas de detalhe para os destaques **Molten Metal** (premiado) e **Midnight Meow** (multiplayer). Prêmios aparecem como selo no card.
- **R-06 RPG de mesa**: seção ou bloco sobre sistemas desenvolvidos e experiência como mestre (escopo depende da pergunta 13).
- **R-07 Habilidades**: agrupadas por domínio, sem porcentagens.
- **R-08 Contato**: e-mail clicável, links sociais. Sem formulário obrigatório.
- **R-09 Currículo PDF**: gerado a partir dos mesmos dados do site, coluna única, ATS-friendly, texto selecionável. Disponível em `/cv/pedro-caurio.pdf` e `/cv/pedro-caurio-en.pdf`.
- **R-10 Página `/cv`**: versão HTML do currículo, imprimível (é a fonte do PDF).
- **R-11 Paleta de comandos** (`Ctrl+K`): navegar para seções/páginas, abrir links, copiar e-mail, baixar CV. Camada extra; o site funciona 100% sem ela.
- **R-12 Página "Como este site foi feito"**: explica SDD, agentes, harness e verificação usados aqui — prova viva da competência em IA.
- **R-13 i18n**: PT-BR padrão, EN em `/en/`, seletor de idioma, `hreflang`.
- **R-14 404** personalizada no estilo do site.

## Requisitos de máquina (SEO/IA)

- **R-20** JSON-LD `Person` com `@id` estável e `sameAs` (GitHub, LinkedIn, itch.io) em todas as páginas.
- **R-21** JSON-LD por projeto/jogo referenciando a Person.
- **R-22** `/llms.txt` e `/resume.json` (JSON Resume) gerados no build.
- **R-23** `sitemap.xml`, `robots.txt` liberando crawlers de IA, canonical, Open Graph com imagem PNG 1200×630.

## Requisitos não funcionais

- **N-01 Performance**: Lighthouse mobile Performance ≥ 95; LCP ≤ 1,5 s; CLS = 0; JS ≤ 30 KB por página.
- **N-02 Acessibilidade**: WCAG 2.2 AA; Lighthouse A11y = 100; axe sem violações; navegação completa por teclado; foco visível; `prefers-reduced-motion`.
- **N-03 Responsivo**: 360px a 1920px sem rolagem horizontal.
- **N-04 Identidade**: somente tokens do [DESIGN.md](../design/DESIGN.md).
- **N-05 Conteúdo como dado**: nenhum texto de conteúdo hardcoded em componentes; tudo em `src/content/` validado por schema.
- **N-06 Custo zero** de hospedagem.
- **N-07 Funciona sem JavaScript** (exceto a paleta de comandos e vídeos).

## Estados a cobrir

- Mídia de jogo indisponível → imagem estática de fallback.
- Projeto sem demo → mostrar só repositório, sem botão quebrado.
- Projeto confidencial → selo "Código privado", estudo de caso sem link de código.
- JavaScript desligado → paleta oculta, resto intacto.
- Movimento reduzido → sem animações de entrada.

## Fora de escopo (v1)

Blog, CMS, light mode, formulário com backend, analytics avançado, área logada.
