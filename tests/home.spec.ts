import { test, expect } from '@playwright/test';

const PHONE = '5535984377973';
const EXPECTED_MESSAGE = 'Olá, tenho interesse no Projeto ALF Está Offline. Gostaria de mais informações.';

test.describe('ALF Está Offline - Home', () => {
  test('deve exibir o título principal e botão de WhatsApp', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('h1')).toContainText('ALF Está Offline');

    const whatsappButton = page.getByTestId('floating-whatsapp');
    await expect(whatsappButton).toBeVisible();
    await expect(whatsappButton).toHaveAttribute('href', new RegExp(`wa.me/${PHONE}`));
    await expect(whatsappButton).toHaveAttribute('href', new RegExp(encodeURIComponent(EXPECTED_MESSAGE)));
  });

  test('deve funcionar corretamente no mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');

    await expect(page.locator('h1')).toContainText('ALF Está Offline');

    const menuButton = page.locator('button[aria-label="Abrir menu"]');
    await expect(menuButton).toBeVisible();
    await menuButton.click();

    const mobileWhatsapp = page.locator('nav a[href*="wa.me"]').first();
    await expect(mobileWhatsapp).toBeVisible();

    await page.screenshot({ path: 'tests/screenshots/home-mobile.png' });
  });

  test('deve navegar pelas âncoras do menu no desktop', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Navegação por âncoras testada no desktop');

    await page.goto('/');

    const sections = ['#livro', '#projeto', '#metodologia', '#bncc', '#autor', '#contato'];

    for (const section of sections) {
      const link = page.locator(`header nav a[href="${section}"]`).first();
      await link.click();
      await page.waitForTimeout(300);
      await expect(page.locator(section)).toBeInViewport();
    }
  });

  test('deve navegar pelo menu hambúrguer no mobile', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'Menu hambúrguer testado no mobile');

    await page.goto('/');

    const sections = ['#livro', '#projeto', '#metodologia'];

    for (const section of sections) {
      const menuButton = page.locator('button[aria-label="Abrir menu"]');
      await menuButton.click();
      const link = page.locator(`[data-testid="mobile-menu"] nav a[href="${section}"]`).first();
      await expect(link).toBeVisible();
      await link.click();
      await page.waitForTimeout(300);
      await expect(page.locator(section)).toBeInViewport();
    }
  });

  test('não deve apresentar erros críticos no console', async ({ page }) => {
    const errors: string[] = [];

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    expect(errors).toHaveLength(0);
  });

  test('deve tirar screenshot desktop', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Screenshot desktop apenas');

    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    await page.screenshot({ path: 'tests/screenshots/home-desktop.png', fullPage: true });
  });
});
