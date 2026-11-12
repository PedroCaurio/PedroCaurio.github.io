import type { Locale } from './index';

const pt = {
  meta: {
    title: 'Pedro Caurio — Engenharia de Software, IA e IoT',
    description:
      'Portfólio de Pedro Caurio: Analista de Projetos de Software na CESS e estudante de Engenharia de Computação na FURG. IA, IoT, dados e sistemas.',
  },
  playMeta: {
    title: 'Jogos & RPG — Pedro Caurio',
    description:
      'Jogos programados por Pedro Caurio (Godot, Unity, Pyxel), incluindo o 2º lugar geral na GameJamPlus 26/27, e o sistema de RPG de mesa Elementomaquia.',
  },
  skipLink: 'Pular para o conteúdo',
  nav: {
    label: 'Navegação principal',
    about: 'Sobre',
    experience: 'Experiência',
    projects: 'Projetos',
    skills: 'Habilidades',
    contact: 'Contato',
    games: 'Jogos',
    sheet: 'Ficha',
    tabletop: 'Mesa',
    toPlay: 'Jogos & RPG',
    toPro: 'Profissional',
  },
  lang: { switchTo: 'EN', switchLabel: 'Read this page in English' },
  hero: {
    prompt: 'whoami',
    pitch:
      'Conecto IA, IoT e dados: de firmware para microcontroladores e processamento de borda à orquestração de agentes de IA.',
    ctaEmail: 'Fale comigo',
    terminalTitle: 'pedro@caurio: ~',
    command: 'status',
    rows: { role: 'cargo', mode: 'regime', focus: 'foco', education: 'formação', technical: 'técnico' },
    focusValue: 'IA · IoT · Dados',
  },
  stats: {
    gpa: 'coeficiente de rendimento',
    yearValue: '4º',
    year: 'ano de Engenharia de Computação',
    since: 'início como Analista de Projetos na CESS',
    technical: 'técnico em Automação Industrial',
  },
  about: {
    eyebrow: 'sobre',
    title: 'Sobre mim',
    educationTitle: 'Formação',
    expected: 'previsão',
    completed: 'concluído em',
    gpa: 'CR',
  },
  experience: {
    eyebrow: 'experiência',
    title: 'Experiência',
    present: 'atual',
    confidential: 'confidencial',
    confidentialNote:
      'Projetos sob acordo de confidencialidade: clientes, dados e arquitetura não são divulgados.',
  },
  projects: {
    eyebrow: 'projetos',
    title: 'Projetos',
    role: 'Papel',
    repo: 'código',
    demo: 'site',
    githubTitle: 'Mais no GitHub',
    githubText:
      'Chat distribuído com Redis e FastAPI, simulador de sistema operacional, tower defense em LÖVE e visualização do A* em Pyxel.',
    githubCta: 'ver repositórios',
  },
  skills: {
    eyebrow: 'stack',
    title: 'Habilidades',
    intro: 'Agrupadas por domínio. Sem barras de porcentagem: só o que eu uso no dia a dia.',
  },
  teaser: {
    eyebrow: 'fora do expediente',
    title: 'Jogos & RPG',
    text: 'Sete jogos programados, um 2º lugar geral na GameJamPlus e um sistema de RPG de mesa autoral. Essa parte tem uma página só dela.',
    cta: 'Abrir jogos & RPG',
  },
  play: {
    prompt: 'press start',
    title: 'Jogos & RPG',
    intro:
      'Fora do expediente, programo jogos e crio sistemas de RPG de mesa. Fui o programador em todos os jogos desta página.',
    stats: {
      games: 'jogos programados',
      jamValue: '2º',
      jam: 'lugar geral na GameJamPlus 26/27',
      rpg: 'anos como mestre de RPG',
      systems: 'sistema de RPG autoral',
    },
    back: 'Voltar ao portfólio profissional',
  },
  games: {
    eyebrow: 'jogos',
    title: 'Jogos',
    intro: 'Sete jogos, todos como programador. Godot na maioria, Unity no multiplayer e Pyxel no retrô.',
    others: 'Outros jogos',
    coverAlt: 'Capa do jogo',
    team: 'Time',
    noAi: 'sem IA generativa',
    browser: 'jogável no navegador',
    itch: 'itch.io',
    repo: 'código',
  },
  sheet: {
    eyebrow: 'ficha',
    title: 'Ficha de personagem',
    intro: 'Minhas habilidades como atributos de RPG. Sem níveis nem porcentagens.',
    classLabel: 'Classe',
    classValue: 'Engenheiro de Computação',
    backgroundLabel: 'Antecedente',
    backgroundValue: 'Técnico em Automação Industrial',
  },
  tabletop: {
    eyebrow: 'mesa',
    title: 'Mesa de RPG',
    system: 'sistema autoral',
    masterTitle: 'Mestre de RPG',
    masterText: (years: number) =>
      `Mais de ${years} anos conduzindo mesas de RPG: narrativa, improviso e facilitação de grupo.`,
  },
  contact: {
    eyebrow: 'contato',
    title: 'Vamos conversar?',
    text: 'Aberto a conversas sobre IA aplicada, IoT, dados e desenvolvimento de jogos. Respondo por e-mail.',
  },
  footer: {
    builtWith: 'Feito com Astro, spec-driven development e agentes de IA.',
    source: 'código-fonte',
  },
  months: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
};

type Ui = typeof pt;

const en: Ui = {
  meta: {
    title: 'Pedro Caurio — Software Engineering, AI & IoT',
    description:
      'Portfolio of Pedro Caurio: Software Project Analyst at CESS and Computer Engineering student at FURG. AI, IoT, data and systems.',
  },
  playMeta: {
    title: 'Games & RPG — Pedro Caurio',
    description:
      'Games programmed by Pedro Caurio (Godot, Unity, Pyxel), including 2nd place overall at GameJamPlus 26/27, and the tabletop RPG system Elementomaquia.',
  },
  skipLink: 'Skip to content',
  nav: {
    label: 'Main navigation',
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact',
    games: 'Games',
    sheet: 'Sheet',
    tabletop: 'Table',
    toPlay: 'Games & RPG',
    toPro: 'Professional',
  },
  lang: { switchTo: 'PT', switchLabel: 'Ler esta página em português' },
  hero: {
    prompt: 'whoami',
    pitch:
      'I connect AI, IoT and data: from microcontroller firmware and edge processing to AI agent orchestration.',
    ctaEmail: 'Get in touch',
    terminalTitle: 'pedro@caurio: ~',
    command: 'status',
    rows: { role: 'role', mode: 'mode', focus: 'focus', education: 'education', technical: 'technical' },
    focusValue: 'AI · IoT · Data',
  },
  stats: {
    gpa: 'GPA (out of 10)',
    yearValue: '4th',
    year: 'year of Computer Engineering',
    since: 'joined CESS as Software Project Analyst',
    technical: 'Industrial Automation technician',
  },
  about: {
    eyebrow: 'about',
    title: 'About me',
    educationTitle: 'Education',
    expected: 'expected',
    completed: 'completed',
    gpa: 'GPA',
  },
  experience: {
    eyebrow: 'experience',
    title: 'Experience',
    present: 'present',
    confidential: 'confidential',
    confidentialNote:
      'Projects under a non-disclosure agreement: clients, data and architecture are not disclosed.',
  },
  projects: {
    eyebrow: 'projects',
    title: 'Projects',
    role: 'Role',
    repo: 'code',
    demo: 'site',
    githubTitle: 'More on GitHub',
    githubText:
      'A distributed chat with Redis and FastAPI, an operating system simulator, a LÖVE tower defense and an A* visualization in Pyxel.',
    githubCta: 'browse repositories',
  },
  skills: {
    eyebrow: 'stack',
    title: 'Skills',
    intro: 'Grouped by domain. No percentage bars: just what I use day to day.',
  },
  teaser: {
    eyebrow: 'after hours',
    title: 'Games & RPG',
    text: 'Seven games programmed, 2nd place overall at GameJamPlus and an original tabletop RPG system. That side has a page of its own.',
    cta: 'Open games & RPG',
  },
  play: {
    prompt: 'press start',
    title: 'Games & RPG',
    intro:
      'After hours, I program games and design tabletop RPG systems. I was the programmer on every game on this page.',
    stats: {
      games: 'games programmed',
      jamValue: '2nd',
      jam: 'place overall at GameJamPlus 26/27',
      rpg: 'years as an RPG game master',
      systems: 'original RPG system',
    },
    back: 'Back to the professional portfolio',
  },
  games: {
    eyebrow: 'games',
    title: 'Games',
    intro: 'Seven games, all as a programmer. Mostly Godot, Unity for multiplayer and Pyxel for retro.',
    others: 'Other games',
    coverAlt: 'Cover art for',
    team: 'Team',
    noAi: 'no generative AI',
    browser: 'playable in browser',
    itch: 'itch.io',
    repo: 'code',
  },
  sheet: {
    eyebrow: 'sheet',
    title: 'Character sheet',
    intro: 'My skills as RPG attributes. No levels, no percentages.',
    classLabel: 'Class',
    classValue: 'Computer Engineer',
    backgroundLabel: 'Background',
    backgroundValue: 'Industrial Automation Technician',
  },
  tabletop: {
    eyebrow: 'table',
    title: 'Tabletop RPG',
    system: 'original system',
    masterTitle: 'Game Master',
    masterText: (years: number) =>
      `${years}+ years running tabletop RPG sessions: storytelling, improvisation and group facilitation.`,
  },
  contact: {
    eyebrow: 'contact',
    title: "Let's talk?",
    text: 'Open to conversations about applied AI, IoT, data and game development. Reach me by email.',
  },
  footer: {
    builtWith: 'Built with Astro, spec-driven development and AI agents.',
    source: 'source code',
  },
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

const ui: Record<Locale, Ui> = { 'pt-br': pt, en };

export function useTranslations(locale: Locale): Ui {
  return ui[locale];
}

export function formatYearMonth(value: string, locale: Locale): string {
  const [year, month] = value.split('-');
  return `${ui[locale].months[Number(month) - 1]} ${year}`;
}

export function formatDecimal(value: string, locale: Locale): string {
  return locale === 'en' ? value : value.replace('.', ',');
}
