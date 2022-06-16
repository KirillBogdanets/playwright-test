import { WebUtils } from "@lib/webUtils";
import { HeaderComponent } from "@components/Header";
import type { Page } from 'playwright';
import { testData } from '@data/testData';

let webUtils: WebUtils;

export class BasePage {
    readonly page: Page;
    public Header: HeaderComponent;

    constructor(page: Page) {
        this.page = page;
        this.Header = new HeaderComponent(this.page);
        webUtils = new WebUtils(this.page);
    }

    async navigateToURL(): Promise<void> {
        await webUtils.navigateToURL(testData.qa);
    }

}