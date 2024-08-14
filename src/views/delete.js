import { dataService } from "../api/dataService.js";
import {page} from "../api/lib.js";

export async function onDelete(ctx) {
    const id = ctx.params.id;
    const choice = confirm('Are you sure?');
    if(choice) {
        await dataService.delTattoo(id);
    }
    page.redirect("/catalog");
}