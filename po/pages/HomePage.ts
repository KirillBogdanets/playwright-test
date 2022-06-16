import { WebUtils } from "@lib/webUtils";
import { BasePage } from "@pages/BasePage";
import type { Page } from 'playwright';

let webUtils: WebUtils;

export class HomePage extends BasePage {
    readonly page: Page;
    public POPULAR_SWITCHER: string;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.POPULAR_SWITCHER = `a.homefeatured`;
        webUtils = new WebUtils(this.page);
    }

    async verifyPopularSwitcher(): Promise<void> {
        await webUtils.verifyElementText(this.POPULAR_SWITCHER, `Popular`);
    }

}