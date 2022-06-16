import { test as baseTest } from '@playwright/test';
import { HomePage } from '@pages/HomePage'
import { SearchPage } from '@pages/SearchPage'

const test = baseTest.extend<{
    HomePage: HomePage;
    SearchPage: SearchPage;
}>({
    HomePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    SearchPage: async ({ page }, use) => {
        await use(new SearchPage(page));
    },
});

export default test;