import { test, expect } from "@playwright/test";

test("login without page object", async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/");
  await page.locator('[data-test="nav-sign-in"]').click();
  await page
    .locator('[data-test="email"]')
    .fill("sarah@practicesoftwaretesting.com");
  await page.locator('[data-test="password"]').fill("g5duR*^vf4iL@0$1");
  await page.locator('[data-test="login-submit"]').click();
  await expect(page.locator('[data-test="nav-menu"]')).toContainText(
    "Sarah Doe",
  );
  await expect(page.locator('[data-test="page-title"]')).toContainText(
    "My account",
  );
});
