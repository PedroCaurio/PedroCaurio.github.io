import { expect, test } from '../fixtures';

test.describe('home PT-BR (profissional)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('R-01 hero mostra nome, papel e CTAs sem rolagem', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1, name: 'Pedro Caurio' })).toBeInViewport();
    await expect(page.getByText('Engenheiro de Computação em formação')).toBeInViewport();

    const email = page.getByRole('link', { name: 'Fale comigo' });
    await expect(email).toBeInViewport();
    await expect(email).toHaveAttribute('href', 'mailto:cauriopedro2@gmail.com');
    await expect(page.getByRole('link', { name: /GitHub/ }).first()).toBeInViewport();
    await expect(page.getByRole('link', { name: /LinkedIn/ }).first()).toBeInViewport();
  });

  test('seções profissionais presentes; jogos e RPG ficam em página própria', async ({ page }) => {
    for (const name of ['Sobre mim', 'Experiência', 'Projetos', 'Habilidades', 'Vamos conversar?']) {
      await expect(page.getByRole('heading', { level: 2, name })).toBeAttached();
    }
    for (const name of ['Jogos', 'Ficha de personagem', 'Mesa de RPG']) {
      await expect(page.getByRole('heading', { level: 2, name, exact: true })).toHaveCount(0);
    }
    await expect(page.locator('article[data-kind="game"]')).toHaveCount(0);
    await expect(page.getByRole('link', { name: 'Abrir jogos & RPG' })).toHaveAttribute('href', '/jogos/');
  });

  test('R-03 experiência mostra a CESS com período e aviso de confidencialidade', async ({ page }) => {
    const experience = page.locator('#experience');
    await expect(
      experience.getByRole('heading', { name: 'Analista de Projetos de Software' }),
    ).toBeAttached();
    await expect(experience.getByText('jun 2025 — atual')).toBeAttached();
    await expect(experience.getByText(/acordo de confidencialidade/)).toBeAttached();
  });

  test('R-07 habilidades profissionais por domínio, sem porcentagens', async ({ page }) => {
    const skills = page.locator('#skills');
    await expect(skills.getByRole('heading', { level: 3 })).toHaveCount(4);
    await expect(skills.getByRole('heading', { name: 'Game Dev' })).toHaveCount(0);
    await expect(skills).not.toContainText('%');
  });

  test('R-08 contato tem e-mail clicável e perfis', async ({ page }) => {
    const contact = page.locator('#contact');
    await expect(contact.getByRole('link', { name: 'cauriopedro2@gmail.com' })).toHaveAttribute(
      'href',
      'mailto:cauriopedro2@gmail.com',
    );
    for (const network of ['GitHub', 'LinkedIn', 'itch.io']) {
      await expect(contact.getByRole('link', { name: new RegExp(network) })).toBeAttached();
    }
  });

  test('R-20 JSON-LD Person com sameAs', async ({ page }) => {
    const raw = await page.locator('script[type="application/ld+json"]').textContent();
    const person = JSON.parse(raw ?? '{}');
    expect(person['@type']).toBe('Person');
    expect(person['@id']).toBe('https://pedrocaurio.github.io/#person');
    expect(person.jobTitle).toBe('Analista de Projetos de Software');
    expect(person.sameAs).toEqual(
      expect.arrayContaining([
        expect.stringContaining('github.com'),
        expect.stringContaining('linkedin.com'),
      ]),
    );
  });
});

test.describe('página de jogos e RPG', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/jogos/');
  });

  test('R-05 jogos têm capa com alt, link do itch.io e selos de prêmio', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1, name: 'Jogos & RPG' })).toBeVisible();

    const games = page.locator('#games article');
    await expect(games).toHaveCount(7);

    const covers = page.locator('#games img');
    await expect(covers).toHaveCount(7);
    for (const cover of await covers.all()) {
      await expect(cover).toHaveAttribute('alt', /^Capa do jogo /);
    }

    const molten = page.locator('#games article', {
      has: page.getByRole('heading', { name: 'Molten Metal' }),
    });
    for (const award of ['2º lugar geral', 'Melhor Áudio', 'Melhor Pitch']) {
      await expect(molten.getByText(award)).toBeAttached();
    }
    await expect(molten.getByRole('link', { name: /itch\.io/ })).toHaveAttribute('href', /itch\.io/);
  });

  test('R-06 ficha completa e mesa de RPG', async ({ page }) => {
    await expect(page.locator('#sheet').getByRole('heading', { level: 3 })).toHaveCount(6);
    await expect(page.locator('#tabletop').getByRole('heading', { name: 'Elementomaquia' })).toBeAttached();
  });

  test('link volta ao portfólio profissional', async ({ page }) => {
    await page.getByRole('link', { name: 'Profissional', exact: true }).click();
    await expect(page).toHaveURL(/\/$/);
    await expect(page.getByRole('heading', { level: 1, name: 'Pedro Caurio' })).toBeVisible();
  });
});

test.describe('confidencialidade e termos proibidos', () => {
  for (const path of ['/', '/en/', '/jogos/', '/en/games/']) {
    test(`${path} não cita SGEM nem ESP32`, async ({ page }) => {
      await page.goto(path);
      const html = await page.content();
      expect(html).not.toMatch(/SGEM/i);
      expect(html).not.toMatch(/ESP32/i);
    });
  }
});

test.describe('R-13 i18n', () => {
  test('seletor da home leva para /en/ com conteúdo em inglês e hreflang', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /Read this page in English/ }).click();

    await expect(page).toHaveURL(/\/en\/$/);
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(page.getByRole('heading', { level: 2, name: 'Experience' })).toBeAttached();
    await expect(page.locator('#experience').getByText('Jun 2025 — present')).toBeAttached();
    await expect(page.locator('#skills')).toContainText('Industrial automation');
    await expect(page.locator('link[rel="alternate"][hreflang="pt-BR"]')).toHaveAttribute(
      'href',
      'https://pedrocaurio.github.io/',
    );

    await page.getByRole('link', { name: /Ler esta página em português/ }).click();
    await expect(page).toHaveURL(/\/$/);
    await expect(page.locator('html')).toHaveAttribute('lang', 'pt-BR');
  });

  test('seletor da página de jogos alterna entre /jogos/ e /en/games/', async ({ page }) => {
    await page.goto('/jogos/');
    await page.getByRole('link', { name: /Read this page in English/ }).click();
    await expect(page).toHaveURL(/\/en\/games\/$/);
    await expect(page.getByRole('heading', { level: 1, name: 'Games & RPG' })).toBeVisible();
    await expect(page.locator('link[rel="alternate"][hreflang="pt-BR"]')).toHaveAttribute(
      'href',
      'https://pedrocaurio.github.io/jogos/',
    );
  });
});
