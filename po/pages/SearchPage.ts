import { WebUtils } from "@lib/webUtils";
import { BasePage } from "@pages/BasePage";
import type { Page } from 'playwright';

let webUtils: WebUtils;

export class SearchPage extends BasePage {
    readonly page: Page;
    public SEARCH_LABEL: string;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.SEARCH_LABEL = `.lighter`;
        webUtils = new WebUtils(this.page);
    }

    async verifySearchLabel(): Promise<void> {
        await webUtils.verifyElementText(this.SEARCH_LABEL, `"t-shirt"`);
    }

}