---
title: Defesa do Reino
summary: 'A tower defense game in LÖVE (Lua) built by a team of 4 in one month. The highlight is the process: feature branching, pull requests with mandatory review and a four-week schedule with one playable goal per week.'
role: Co-author
order: 4
context: Programming Languages course
team:
  - { name: Felipe Fagundes, url: https://github.com/FelipeFagundesCosta }
  - { name: Gabriel Silva }
  - { name: Matheus Pimenta }
  - { name: Pedro Caurio, url: https://github.com/PedroCaurio }
facts:
  - { label: Team, value: 4 people }
  - { label: Deadline, value: 4 weeks }
  - { label: Engine, value: LÖVE }
stack: [Lua, LÖVE, hump, bump, jumper, anim8, Git]
links:
  repo: https://github.com/PedroCaurio/Tower-Defense-LP
---

## Challenge

Ship a complete game in **one month**, with **four people** working on the same codebase. The player defends a structure on the left of the screen against waves of enemies by recruiting soldiers and buying upgrades.

## Team process

- **Feature branching.** `main` always stable and playable, `develop` for integration and one branch per feature (`feature/...`) or fix (`bugfix/...`).
- **Atomic, descriptive commits,** in the `feat: ...` format, one topic per commit.
- **Pull requests with review.** At least one teammate reviews and approves before merging into `develop`.
- **Local testing before each PR,** and conflicts resolved by talking to whoever made the other change.

## Schedule

1. **Week 1: foundations.** Environment, project structure, the defensive structure and the first enemy with health and movement.
2. **Week 2: playable MVP.** Collision, money and wave UI, shop, soldiers and damage between entities.
3. **Week 3: waves and pathfinding.** Wave system, enemies following paths with A* and different enemy types.
4. **Week 4: polish.** Menus and game over, audio, animations, performance and bug fixing.

## Architecture

The code is modular so four people can work in parallel without stepping on each other:

- **`states/`** for menu, gameplay and game over;
- **`entities/`** for enemies, soldiers and the defensive structure;
- **`ui/`** for buttons and the shop;
- **`systems/`** for waves and collision.

## Decisions and trade-offs

- **Off-the-shelf libraries to fit the deadline:** `hump.gamestate` (states), `bump` (collision), `jumper` (A* pathfinding) and `anim8` (spritesheet animation). Less custom code, at the cost of depending on their APIs.
- **MVP in week two.** Getting something playable early leaves the last two weeks for depth and polish instead of rushing the basics.
