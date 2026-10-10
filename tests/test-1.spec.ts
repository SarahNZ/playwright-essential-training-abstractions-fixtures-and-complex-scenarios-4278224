import { test, expect } from "@playwright/test";

test("Register new user (as website resets test data daily)", async ({
  page,
}) => {
  const randomNumber = Math.floor(Math.random() * 20_000_000);
  console.log(randomNumber);

  await page.goto("https://practicesoftwaretesting.com/auth/login");
  await page.locator('[data-test="register-link"]').click();
  await page.getByTestId("first-name").fill("Sarah" + randomNumber);
  await page.getByTestId("last-name").fill("Doe");
  await page.getByTestId("dob").fill("2000-01-01");
  await page.getByTestId("country").selectOption("AU");
  await page.getByTestId("postal_code").fill("0100");
  await page.getByTestId("house_number").fill("42");
  await page.getByTestId("phone").fill("0212345678");
  await page
    .getByTestId("email")
    .fill("sarah" + randomNumber + "@practicesoftwaretesting.com");
  await page.getByTestId("password").fill("ROva5mgC%x!^85@s");
  await page.getByTestId("register-submit").click();
});
