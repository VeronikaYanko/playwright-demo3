const { test, expect } = require('@playwright/test');

test.describe('Aunthentication & Authorization', async () => {
    test('Sign in with existing credentials', async ({ page }) => {
        await page.goto('https://coding.pasv.us/user/login')

        await page.locator('#normal_login_email').fill('veroyanko@gmail.com')
        await page.locator('#normal_login_password').fill('Niiko4ka')
        await page.locator('button[type="submit"]').click()

        await expect(page.locator('.ant-avatar-square')).toBeVisible()

    })
})
