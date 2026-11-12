import AxeBuilder from '@axe-core/playwright';
import { test as base, expect } from '@playwright/test';

type Fixtures = {
  consoleErrors: string[];
  expectNoA11yViolations: () => Promise<void>;
  expectNoHorizontalOverflow: () => Promise<void>;
};

export const test = base.extend<Fixtures>({
  consoleErrors: async ({ page }, use) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    page.on('pageerror', (err) => errors.push(err.message));
    page.on('requestfailed', (req) => errors.push(`request failed: ${req.url()}`));
    await use(errors);
  },

  expectNoA11yViolations: async ({ page }, use) => {
    await use(async () => {
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
        .analyze();
      const summary = results.violations.map((v) => `${v.id}: ${v.help} (${v.nodes.length})`);
      expect(summary, 'violações de acessibilidade (axe)').toEqual([]);
    });
  },

  expectNoHorizontalOverflow: async ({ page }, use) => {
    await use(async () => {
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
      );
      expect(overflow, 'rolagem horizontal').toBe(false);
    });
  },
});

export { expect };
