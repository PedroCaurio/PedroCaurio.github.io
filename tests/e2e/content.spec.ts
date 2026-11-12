import { expect, test } from '../fixtures';

test.describe('coleções de conteúdo', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/dev/conteudo/');
  });

  test('renderiza o perfil e a experiência nos dois idiomas', async ({ page }) => {
    await expect(page.getByRole('heading', { name: '> pt-br' })).toBeVisible();
    await expect(page.getByRole('heading', { name: '> en' })).toBeVisible();
    await expect(page.getByText('Analista de Projetos de Software · CESS')).toBeVisible();
    await expect(page.getByText('Software Project Analyst · CESS')).toBeVisible();
  });

  test('lista os 7 jogos em cada idioma, com Molten Metal premiado', async ({ page }) => {
    const pt = page.locator('section', { has: page.getByRole('heading', { name: '> pt-br' }) });
    await expect(pt.locator('article[data-kind="game"]')).toHaveCount(7);
    await expect(pt.getByText('2º lugar geral · Melhor Áudio · Melhor Pitch')).toBeVisible();
  });

  test('não expõe nomes de produtos internos da CESS nem cita ESP32', async ({ page }) => {
    await expect(page.locator('body')).not.toContainText(/SGEM/i);
    await expect(page.locator('body')).not.toContainText(/ESP32/i);
  });
});
