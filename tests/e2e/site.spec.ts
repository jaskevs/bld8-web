import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("keyboard navigation and project reading work", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Skip to content" })).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("main")).toBeFocused();
  const evidence = page.getByRole("button", { name: "03Evidence", exact: true });
  await evidence.focus();
  await page.keyboard.press("Enter");
  await expect(evidence).toHaveAttribute("aria-pressed", "true");
  await expect(page.getByText("Sources, traces and test results.", { exact: true })).toBeVisible();
  await page.getByRole("link", { name: "View projects", exact: true }).focus();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/\/work$/);
  await page.getByRole("link", { name: "Workbench notes", exact: true }).click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("BLD8 Workbench");
  await page.getByText("001 — Hosting and deployment", { exact: true }).click();
  await expect(page.getByRole("link", { name: "Read draft ADR 001" })).toBeVisible();
  await page.getByRole("navigation").getByRole("link", { name: "About", exact: true }).click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("About BLD8.");
  await page.getByRole("link", { name: "BLD8 home", exact: true }).click();
  await expect(page).toHaveURL("/");
  expect(errors).toEqual([]);
});

for (const route of ["/", "/work", "/work/workbench", "/work/bld8-web", "/about"]) {
  test(`${route} has accessible structure, metadata and no horizontal overflow`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `https://www.bld8.dev${route === "/" ? "" : route}`);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    const result = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
    expect(result.violations).toEqual([]);
  });
}

test("unknown routes return a useful 404", async ({ page }) => {
  const response = await page.goto("/not-a-page");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { name: "No page here." })).toBeVisible();
  await page.getByRole("link", { name: "View projects", exact: true }).click();
  await expect(page).toHaveURL(/\/work$/);
});
