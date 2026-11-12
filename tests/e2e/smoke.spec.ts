import { expect, test } from '../fixtures';

const PAGES = [
  { path: '/', lang: 'pt-BR' },
  { path: '/en/', lang: 'en' },
  { path: '/jogos/', lang: 'pt-BR' },
  { path: '/en/games/', lang: 'en' },
  { path: '/dev/tokens/', lang: 'pt-BR' },
  { path: '/dev/conteudo/', lang: 'pt-BR' },
];

for (const { path, lang } of PAGES) {
  test.describe(`página ${path}`, () => {
    test('carrega com estrutura básica, sem erros e acessível', async ({
      page,
      consoleErrors,
      expectNoA11yViolations,
      expectNoHorizontalOverflow,
    }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);

      await expect(page.locator('html')).toHaveAttribute('lang', lang);
      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page.locator('main#conteudo')).toBeVisible();

      await expectNoHorizontalOverflow();
      await expectNoA11yViolations();
      expect(consoleErrors).toEqual([]);
    });
  });
}

test('skip link aparece ao receber foco e leva ao conteúdo', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Tab');
  const skip = page.getByRole('link', { name: 'Pular para o conteúdo' });
  await expect(skip).toBeFocused();
  await expect(skip).toBeVisible();
  await skip.press('Enter');
  await expect(page).toHaveURL(/#conteudo$/);
});

test('arquivos de máquina estão publicados', async ({ request }) => {
  const robots = await request.get('/robots.txt');
  expect(robots.ok()).toBe(true);
  expect(await robots.text()).toContain('User-agent: GPTBot');

  const sitemap = await request.get('/sitemap-index.xml');
  expect(sitemap.ok()).toBe(true);
});

test('página /dev fica fora do sitemap e com noindex', async ({ page, request }) => {
  const sitemap = await (await request.get('/sitemap-0.xml')).text();
  expect(sitemap).not.toContain('/dev/');

  await page.goto('/dev/tokens/');
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex');
});
