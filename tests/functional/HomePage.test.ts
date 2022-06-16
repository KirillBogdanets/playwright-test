import test from '@lib/BaseTest';

// We can use Steps like in Cucumber format as shown below

test(`@Smoke Verify My Address Details`, async ({ HomePage, SearchPage }) => {
    await test.step(`Navigate to Application`, async () => {
        await HomePage.navigateToURL();
    });
    await test.step(`Verify Home Page`, async () => {
        await HomePage.verifyPopularSwitcher();
    });
    await test.step(`Searching`, async () => {
        await HomePage.Header.searching('t-shirt');
    });
    await test.step(`Verify Searching`, async () => {
        await SearchPage.verifySearchLabel();
    });
});