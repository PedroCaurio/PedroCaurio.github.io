---
title: Defesa do Reino
summary: 'Tower defense em LÖVE (Lua) feito por uma equipe de 4 pessoas em 1 mês. O destaque é o processo: feature branching, pull requests com revisão obrigatória e um cronograma de quatro semanas com uma meta jogável por semana.'
role: Coautor
order: 4
context: Disciplina de Linguagens de Programação
team:
  - { name: Felipe Fagundes, url: https://github.com/FelipeFagundesCosta }
  - { name: Gabriel Silva }
  - { name: Matheus Pimenta }
  - { name: Pedro Caurio, url: https://github.com/PedroCaurio }
facts:
  - { label: Equipe, value: 4 pessoas }
  - { label: Prazo, value: 4 semanas }
  - { label: Engine, value: LÖVE }
stack: [Lua, LÖVE, hump, bump, jumper, anim8, Git]
links:
  repo: https://github.com/PedroCaurio/Tower-Defense-LP
---

## Desafio

Entregar um jogo completo em **um mês**, com **quatro pessoas** mexendo no mesmo código. O jogador defende uma estrutura à esquerda da tela contra hordas de inimigos, recrutando soldados e comprando melhorias.

## Processo de equipe

- **Feature branching.** `main` sempre estável e jogável, `develop` como integração e uma branch por funcionalidade (`feature/...`) ou correção (`bugfix/...`).
- **Commits atômicos e descritivos,** no formato `feat: ...`, um assunto por commit.
- **Pull requests com revisão.** Pelo menos um colega revisa e aprova antes do merge em `develop`.
- **Teste local antes do PR** e conflitos resolvidos conversando com quem fez a outra alteração.

## Cronograma

1. **Semana 1: fundamentos.** Ambiente, estrutura do projeto, a estrutura defensiva e o primeiro inimigo com vida e movimento.
2. **Semana 2: MVP jogável.** Colisão, interface de dinheiro e horda, loja, soldados e dano entre as entidades.
3. **Semana 3: ondas e pathfinding.** Sistema de ondas, inimigos seguindo caminhos com A* e tipos diferentes de inimigo.
4. **Semana 4: polimento.** Menus e game over, áudio, animações, desempenho e correção de bugs.

## Arquitetura

O código é modular para que quatro pessoas trabalhem em paralelo sem pisar umas nas outras:

- **`states/`** para menu, jogo e game over;
- **`entities/`** para inimigos, soldados e a estrutura defensiva;
- **`ui/`** para botões e loja;
- **`systems/`** para ondas e colisão.

## Decisões e trade-offs

- **Bibliotecas prontas para caber no prazo:** `hump.gamestate` (estados), `bump` (colisão), `jumper` (pathfinding A*) e `anim8` (animação por spritesheet). Menos código próprio, em troca de depender das APIs delas.
- **MVP na segunda semana.** Garantir algo jogável cedo deixa as duas últimas semanas para profundidade e polimento, em vez de correr para fechar o básico.
