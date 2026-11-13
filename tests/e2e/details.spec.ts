import { expect, test } from '../fixtures';

test.describe('T-33 estudos de caso', () => {
  test('card de projeto da home abre o estudo de caso', async ({ page }) => {
    await page.goto('/');
    await page.locator('#projects').getByRole('link', { name: 'distributed-chat', exact: true }).click();

    await expect(page).toHaveURL(/\/projetos\/distributed-chat\/$/);
    await expect(page.getByRole('heading', { level: 1, name: 'distributed-chat' })).toBeVisible();
    await expect(page.getByRole('navigation', { name: 'Trilha de navegação' })).toBeVisible();
    for (const name of ['Problema', 'Arquitetura', 'Decisões e trade-offs']) {
      await expect(page.getByRole('heading', { level: 2, name })).toBeAttached();
    }
  });

  test('projeto em equipe credita o time e não inventa papel', async ({ page }) => {
    await page.goto('/projetos/tower-defense/');
    const team = page.getByRole('region', { name: 'Equipe' });
    for (const name of ['Felipe Fagundes', 'Gabriel Silva', 'Matheus Pimenta', 'Pedro Caurio']) {
      await expect(team.getByText(name)).toBeVisible();
    }
    await expect(page.getByText('o crédito é de todo o time')).toBeVisible();
    await expect(page.locator('header dl')).toContainText('Coautor');
  });

  test('navegação anterior/próximo encadeia os estudos', async ({ page }) => {
    await page.goto('/projetos/portfolio/');
    await page.getByRole('link', { name: /^Próximo / }).click();
    await expect(page).toHaveURL(/\/projetos\/distributed-chat\/$/);
    await page.getByRole('link', { name: /^Anterior / }).click();
    await expect(page).toHaveURL(/\/projetos\/portfolio\/$/);
  });

  test('seletor de idioma leva ao mesmo estudo em inglês', async ({ page }) => {
    await page.goto('/projetos/so-simulator/');
    await page.getByRole('link', { name: /Read this page in English/ }).click();
    await expect(page).toHaveURL(/\/en\/projects\/so-simulator\/$/);
    await expect(page.getByRole('heading', { level: 1, name: 'Operating System Simulator' })).toBeVisible();
    await expect(page.locator('link[rel="alternate"][hreflang="pt-BR"]')).toHaveAttribute(
      'href',
      'https://pedrocaurio.github.io/projetos/so-simulator/',
    );
  });

  test('seção de processo leva ao estudo de caso deste site', async ({ page }) => {
    await page.goto('/');
    const process = page.locator('#process');
    await expect(process.getByRole('listitem')).toHaveCount(4);
    await process.getByRole('link', { name: 'Ver o processo aplicado neste site' }).click();
    await expect(page).toHaveURL(/\/projetos\/portfolio\/$/);
    await expect(page.getByRole('heading', { level: 2, name: 'Harness para agentes' })).toBeAttached();
  });
});

test.describe('páginas de jogo', () => {
  test('card de jogo em destaque abre a ficha do jogo', async ({ page }) => {
    await page.goto('/jogos/');
    await page.locator('#games').getByRole('link', { name: 'Molten Metal', exact: true }).click();

    await expect(page).toHaveURL(/\/jogos\/molten-metal\/$/);
    await expect(page.getByRole('heading', { level: 1, name: 'Molten Metal' })).toBeVisible();
    await expect(page.getByRole('heading', { level: 2, name: 'O que eu programei' })).toBeAttached();
    await expect(page.getByText('2º lugar geral')).toBeVisible();
    await expect(page.getByRole('link', { name: /Jogar no itch\.io/ })).toHaveAttribute('href', /itch\.io/);
  });

  test('ficha do Midnight Meow lista o time com papéis', async ({ page }) => {
    await page.goto('/jogos/midnight-meow/');
    const team = page.getByRole('region', { name: 'Time' });
    await expect(team.getByText('Debs Carvalho')).toBeVisible();
    await expect(team.getByText('Game design')).toBeVisible();
  });
});

test.describe('navegação responsiva', () => {
  test('links de seção ficam acessíveis em qualquer largura', async ({ page }) => {
    await page.goto('/');
    const nav = page.getByRole('navigation', { name: 'Navegação principal' });
    await expect(nav).toBeVisible();
    await nav.getByRole('link', { name: 'Projetos' }).click();
    await expect(page).toHaveURL(/#projects$/);
  });

  test('em subpáginas, os links de seção voltam para a home', async ({ page }) => {
    await page.goto('/projetos/portfolio/');
    const nav = page.getByRole('navigation', { name: 'Navegação principal' });
    await expect(nav.getByRole('link', { name: 'Contato' })).toHaveAttribute('href', '/#contact');
  });
});
