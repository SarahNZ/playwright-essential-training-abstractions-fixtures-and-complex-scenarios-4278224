import { test, expect } from "@playwright/test";

test("GET /products", async ({ request }) => {
  const apiUrl = "https://api.practicesoftwaretesting.com";
  const response = await request.get(apiUrl + "/products");

  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.data.length).toBe(9);
  expect(body.total).toBe(50);
});

test("POST /users/login", async ({ request }) => {
  const apiUrl = "https://api.practicesoftwaretesting.com";
  const response = await request.post(apiUrl + "/users/login", {
    data: {
      email: "sarah@practicesoftwaretesting.com",
      password: "ROva5mgC%x!^85@s",
    },
  });

  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.access_token).toBeTruthy();
});
