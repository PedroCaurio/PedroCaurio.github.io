---
title: Simulador de Sistema Operacional
summary: Simulador com interface gráfica que mostra, passo a passo, escalonamento de processos por alternância circular, gerenciamento de memória com paginação FIFO e dispositivos de entrada e saída.
role: Coautor
order: 3
context: Disciplina de Sistemas Operacionais
team:
  - { name: Pedro Caurio, url: https://github.com/PedroCaurio }
  - { name: Felipe Fagundes, url: https://github.com/FelipeFagundesCosta }
  - { name: mathyc0de, url: https://github.com/mathyc0de }
facts:
  - { label: Equipe, value: 3 pessoas }
  - { label: Interface, value: PyQt6 }
stack: [Python, PyQt6]
links:
  repo: https://github.com/PedroCaurio/so-simulator
---

## Problema

Escalonamento, paginação e entrada e saída costumam ser estudados separadamente e no papel. O simulador junta os três em uma interface gráfica, para que dê para ver um processo disputando CPU, gerando faltas de página e esperando por um dispositivo ao mesmo tempo.

## O que o simulador modela

- **Escalonamento de processos** com o algoritmo de alternância circular (Round Robin).
- **Gerenciamento de memória** com paginação e política de substituição FIFO.
- **Dispositivos de entrada e saída** simulados, com processos esperando por eles.

## Arquitetura

- **`src/`** guarda a lógica do simulador: escalonador, processos, gerenciador de memória e gerenciador de dispositivos.
- **`UI/`** guarda a interface em PyQt6, separada da lógica.
- **Um gerador de entrada** cria os cenários de simulação e valida que as variáveis de memória são potências de 2, como a paginação exige.
- Os módulos principais (escalonador, dispositivos, memória, processos e o ponto de entrada) são documentados.

## Decisões e trade-offs

- **Lógica separada da interface.** Permite testar e evoluir os algoritmos sem mexer nos widgets; o custo é manter a sincronização entre o estado do simulador e o que a tela mostra.
- **Entrada gerada em vez de digitada.** Cenários reproduzíveis e válidos por construção, como tamanhos de memória em potência de 2.

## Próximos passos

O próprio repositório lista as melhorias planejadas:

- cores por estado do processo e destaque de page hits, substituições e inserções na memória;
- visualização das tabelas de páginas e das filas de cada dispositivo;
- outros algoritmos de escalonamento e outras políticas de substituição;
- limites de memória total e de alocação por processo.
