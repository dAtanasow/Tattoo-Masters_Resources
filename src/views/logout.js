import { updateNav } from "../api/nav.js";
import { logout } from "../api/userService.js";
import { page } from "../api/lib.js";
import { util } from "../utils/userUtil.js";

export async function onLogout() {
    await logout();
    util.removeUser();
    updateNav();
    page.redirect("/");
}