import type { Locale } from './index';

const pt = {
  meta: {
    title: 'Pedro Caurio — Engenharia de Software, IA e IoT',
    description:
      'Portfólio de Pedro Caurio: Analista de Projetos de Software na CESS, estudante de Engenharia de Computação na FURG. IA, IoT, dados, jogos e sistemas de RPG.',
  },
  skipLink: 'Pular para o conteúdo',
  nav: {
    label: 'Navegação principal',
    about: 'Sobre',
    experience: 'Experiência',
    projects: 'Projetos',
    games: 'Jogos',
    skills: 'Habilidades',
    contact: 'Contato',
  },
  lang: { switchTo: 'EN', switchLabel: 'Read this page in English' },
  hero: {
    prompt: 'whoami',
    pitch:
      'Conecto IA, IoT e dados: de firmware para ESP32 à orquestração de agentes. Fora do expediente, programo jogos e crio sistemas de RPG de mesa.',
    ctaEmail: 'Fale comigo',
    terminalTitle: 'pedro@caurio: ~',
    command: 'status',
    rows: { role: 'cargo', mode: 'regime', focus: 'foco', education: 'formação', quest: 'quest atual' },
    focusValue: 'IA · IoT · Dados',
  },
  stats: {
    label: 'Destaques',
    gpa: 'coeficiente de rendimento',
    games: 'jogos programados',
    rpg: 'anos como mestre de RPG',
    jamValue: '2º',
    jam: 'lugar geral na GameJamPlus 26/27',
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
  skills: {
    eyebrow: 'ficha',
    title: 'Ficha de personagem',
    intro:
      'Habilidades agrupadas como atributos de RPG. Sem barras de porcentagem: só o que eu uso de verdade.',
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
      'Portfolio of Pedro Caurio: Software Project Analyst at CESS and Computer Engineering student at FURG. AI, IoT, data, games and tabletop RPG systems.',
  },
  skipLink: 'Skip to content',
  nav: {
    label: 'Main navigation',
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    games: 'Games',
    skills: 'Skills',
    contact: 'Contact',
  },
  lang: { switchTo: 'PT', switchLabel: 'Ler esta página em português' },
  hero: {
    prompt: 'whoami',
    pitch:
      'I connect AI, IoT and data: from ESP32 firmware to agent orchestration. After hours, I program games and design tabletop RPG systems.',
    ctaEmail: 'Get in touch',
    terminalTitle: 'pedro@caurio: ~',
    command: 'status',
    rows: { role: 'role', mode: 'mode', focus: 'focus', education: 'education', quest: 'current quest' },
    focusValue: 'AI · IoT · Data',
  },
  stats: {
    label: 'Highlights',
    gpa: 'GPA (out of 10)',
    games: 'games programmed',
    rpg: 'years as an RPG game master',
    jamValue: '2nd',
    jam: 'place overall at GameJamPlus 26/27',
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
  skills: {
    eyebrow: 'stats',
    title: 'Character sheet',
    intro: 'Skills grouped as RPG attributes. No percentage bars: just what I actually use.',
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
