import { test as setup, expect } from "@playwright/test";

setup("Create customer 01 auth", async ({ page, context }) => {
  const email = "sarah@practicesoftwaretesting.com";
  const password = "g5duR*^vf4iL@0$1";
  const customer01AuthFile = ".auth/customer01.json";

  await page.goto("https://practicesoftwaretesting.com/auth/login");

  await page.getByTestId("email").fill(email);
  await page.getByTestId("password").fill(password);
  await page.getByTestId("login-submit").click();

  await expect(page.getByTestId("nav-menu")).toContainText("Sarah Doe");
  await context.storageState({ path: customer01AuthFile });
});
