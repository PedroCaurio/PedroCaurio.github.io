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
    process: 'Processo',
    skills: 'Habilidades',
    contact: 'Contato',
    games: 'Jogos',
    sheet: 'Ficha',
    tabletop: 'Mesa',
    toPlay: 'Jogos & RPG',
    toPro: 'Profissional',
    home: 'Início',
    breadcrumb: 'Trilha de navegação',
  },
  lang: { switchTo: 'EN', switchLabel: 'Read this page in English' },
  hero: {
    prompt: 'whoami',
    pitch:
      'Conecto IA, IoT e dados: do firmware de microcontroladores e do processamento de borda à orquestração de agentes de IA.',
    ctaEmail: 'Fale comigo',
    ctaCases: 'Ver estudos de caso',
    terminalTitle: 'pedro@caurio: ~',
    command: 'status',
    rows: { role: 'cargo', mode: 'regime', focus: 'foco', education: 'formação', technical: 'técnico' },
    focusValue: 'IA · IoT · Dados',
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
    intro:
      'Cada projeto tem um estudo de caso com problema, arquitetura, decisões e trade-offs. Os projetos da CESS são confidenciais e não aparecem aqui.',
    role: 'Papel',
    repo: 'código',
    demo: 'site',
    read: 'Ler estudo de caso',
    team: 'em equipe',
    githubTitle: 'Mais no GitHub',
    githubText: 'Visualização do algoritmo A* em Pyxel, serviços de rede e outros trabalhos da faculdade.',
    githubCta: 'ver repositórios',
  },
  caseStudy: {
    eyebrow: 'estudo de caso',
    metaSuffix: 'Estudo de caso · Pedro Caurio',
    role: 'Papel',
    context: 'Contexto',
    team: 'Equipe',
    teamNote: 'Projeto em equipe: o crédito é de todo o time.',
    stack: 'Stack',
    links: 'Links',
    toc: 'Nesta página',
    prev: 'Anterior',
    next: 'Próximo',
    back: 'Voltar aos projetos',
  },
  process: {
    eyebrow: 'processo',
    title: 'Como eu trabalho',
    intro:
      'Spec-driven development com agentes de IA: o mesmo fluxo que aplico no trabalho e que construiu este site.',
    steps: [
      {
        title: 'Especificar',
        text: 'Requisitos, design técnico e tarefas escritos antes do código e versionados junto com ele.',
      },
      {
        title: 'Preparar o harness',
        text: 'Contexto, regras e ferramentas (MCP) para que os agentes trabalhem dentro de limites claros.',
      },
      {
        title: 'Construir com agentes',
        text: 'Os agentes implementam tarefa por tarefa; eu dirijo a arquitetura e reviso decisões e fatos.',
      },
      {
        title: 'Verificar e entregar',
        text: 'Testes, checagens estáticas e conferência no navegador. O CI só publica o que passou.',
      },
    ],
    cta: 'Ver o processo aplicado neste site',
  },
  skills: {
    eyebrow: 'stack',
    title: 'Habilidades',
    intro: 'Agrupadas por domínio, sem barras de porcentagem: só o que uso de verdade.',
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
    details: 'Ver detalhes',
  },
  gameDetail: {
    eyebrow: 'ficha do jogo',
    metaSuffix: 'Jogos · Pedro Caurio',
    about: 'O jogo',
    contributions: 'O que eu programei',
    evidence: 'O que este jogo demonstra',
    team: 'Time',
    engine: 'Engine',
    language: 'Linguagem',
    genre: 'Gênero',
    role: 'Papel',
    jam: 'Game jam',
    play: 'Jogar no itch.io',
    prev: 'Anterior',
    next: 'Próximo',
    back: 'Voltar aos jogos',
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
    text: 'Gosto de conversar sobre IA aplicada, IoT, dados e desenvolvimento de jogos. O caminho mais rápido é o e-mail.',
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
    process: 'Process',
    skills: 'Skills',
    contact: 'Contact',
    games: 'Games',
    sheet: 'Sheet',
    tabletop: 'Table',
    toPlay: 'Games & RPG',
    toPro: 'Professional',
    home: 'Home',
    breadcrumb: 'Breadcrumb',
  },
  lang: { switchTo: 'PT', switchLabel: 'Ler esta página em português' },
  hero: {
    prompt: 'whoami',
    pitch:
      'I connect AI, IoT and data: from microcontroller firmware and edge processing to AI agent orchestration.',
    ctaEmail: 'Get in touch',
    ctaCases: 'See case studies',
    terminalTitle: 'pedro@caurio: ~',
    command: 'status',
    rows: { role: 'role', mode: 'mode', focus: 'focus', education: 'education', technical: 'technical' },
    focusValue: 'AI · IoT · Data',
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
    intro:
      'Each project has a case study covering the problem, architecture, decisions and trade-offs. CESS projects are confidential and are not shown here.',
    role: 'Role',
    repo: 'code',
    demo: 'site',
    read: 'Read case study',
    team: 'team project',
    githubTitle: 'More on GitHub',
    githubText: 'An A* visualization in Pyxel, networking services and other university work.',
    githubCta: 'browse repositories',
  },
  caseStudy: {
    eyebrow: 'case study',
    metaSuffix: 'Case study · Pedro Caurio',
    role: 'Role',
    context: 'Context',
    team: 'Team',
    teamNote: 'Team project: credit goes to the whole team.',
    stack: 'Stack',
    links: 'Links',
    toc: 'On this page',
    prev: 'Previous',
    next: 'Next',
    back: 'Back to projects',
  },
  process: {
    eyebrow: 'process',
    title: 'How I work',
    intro:
      'Spec-driven development with AI agents: the same workflow I use at work and that built this site.',
    steps: [
      {
        title: 'Specify',
        text: 'Requirements, technical design and tasks written before the code and versioned alongside it.',
      },
      {
        title: 'Set up the harness',
        text: 'Context, rules and tools (MCP) so agents work within clear boundaries.',
      },
      {
        title: 'Build with agents',
        text: 'Agents implement task by task; I steer the architecture and review decisions and facts.',
      },
      {
        title: 'Verify and ship',
        text: 'Tests, static checks and a real browser review. CI only publishes what passed.',
      },
    ],
    cta: 'See the process applied to this site',
  },
  skills: {
    eyebrow: 'stack',
    title: 'Skills',
    intro: 'Grouped by domain, no percentage bars: only what I actually use.',
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
    details: 'See details',
  },
  gameDetail: {
    eyebrow: 'game sheet',
    metaSuffix: 'Games · Pedro Caurio',
    about: 'The game',
    contributions: 'What I programmed',
    evidence: 'What this game shows',
    team: 'Team',
    engine: 'Engine',
    language: 'Language',
    genre: 'Genre',
    role: 'Role',
    jam: 'Game jam',
    play: 'Play on itch.io',
    prev: 'Previous',
    next: 'Next',
    back: 'Back to games',
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
    text: 'Happy to talk about applied AI, IoT, data and game development. Email is the fastest way to reach me.',
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
