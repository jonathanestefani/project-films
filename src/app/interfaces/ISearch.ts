import { Params } from "@angular/router";

export interface ISearch {
    filters: Params;
    with: string[];
    field: string;
    value: string;
    page: number;
    limit: number;
    total: number;
    pagesIndexed: number[];
}
