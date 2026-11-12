import { expect, test } from '../fixtures';

test.describe('home PT-BR', () => {
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

  test('seções principais estão presentes', async ({ page }) => {
    for (const name of [
      'Sobre mim',
      'Experiência',
      'Projetos',
      'Jogos',
      'Ficha de personagem',
      'Mesa de RPG',
      'Vamos conversar?',
    ]) {
      await expect(page.getByRole('heading', { level: 2, name })).toBeAttached();
    }
  });

  test('R-03 experiência mostra a CESS com período e aviso de confidencialidade', async ({ page }) => {
    const experience = page.locator('#experience');
    await expect(
      experience.getByRole('heading', { name: 'Analista de Projetos de Software' }),
    ).toBeAttached();
    await expect(experience.getByText('jun 2025 — atual')).toBeAttached();
    await expect(experience.getByText(/acordo de confidencialidade/)).toBeAttached();
  });

  test('R-05 jogos têm capa com alt, link do itch.io e selos de prêmio', async ({ page }) => {
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

  test('R-07 habilidades agrupadas como atributos, sem porcentagens', async ({ page }) => {
    const skills = page.locator('#skills');
    await expect(skills.getByRole('heading', { level: 3 })).toHaveCount(6);
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

  test('não expõe nomes de produtos internos da CESS', async ({ page }) => {
    await expect(page.locator('body')).not.toContainText(/SGEM/i);
    expect(await page.content()).not.toMatch(/SGEM/i);
  });
});

test.describe('R-13 i18n', () => {
  test('seletor leva para /en/ com conteúdo em inglês e hreflang', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /Read this page in English/ }).click();

    await expect(page).toHaveURL(/\/en\/$/);
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(page.getByRole('heading', { level: 2, name: 'Experience' })).toBeAttached();
    await expect(page.locator('#experience').getByText('Jun 2025 — present')).toBeAttached();
    await expect(page.locator('link[rel="alternate"][hreflang="pt-BR"]')).toHaveAttribute(
      'href',
      'https://pedrocaurio.github.io/',
    );

    await page.getByRole('link', { name: /Ler esta página em português/ }).click();
    await expect(page).toHaveURL(/\/$/);
    await expect(page.locator('html')).toHaveAttribute('lang', 'pt-BR');
  });
});
