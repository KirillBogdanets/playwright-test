import { WebUtils } from "@lib/webUtils";
import type { Page } from 'playwright';

let webUtils: WebUtils;

export class HeaderComponent {
    readonly page: Page;
    private readonly SEARCH_FIELD: string;
    private readonly FIND_BUTTON: string;

    constructor(page: Page) {
        this.page = page;
        this.SEARCH_FIELD = `#search_query_top`;
        this.FIND_BUTTON = `.button-search`;
        webUtils = new WebUtils(this.page);
    }

    async searching(searchText: string): Promise<void> {
        await webUtils.enterElementText(this.SEARCH_FIELD, searchText);
        await webUtils.clickElement(this.FIND_BUTTON);
    }
}