import { page } from "./api/lib.js";
import { updateNav } from "./api/nav.js";
import { showCatalog } from "./views/catalog.js";
import { showCreateTattoo } from "./views/create.js";
import { onDelete } from "./views/delete.js";
import { showDetails } from "./views/details.js";
import { showEdit } from "./views/edit.js";
import { showHome } from "./views/home.js";
import { showLogin } from "./views/login.js";
import { onLogout } from "./views/logout.js";
import { showRegister } from "./views/register.js";

page("/", showHome);
page("/register", showRegister);
page("/login", showLogin);
page("/logout", onLogout);
page("/catalog", showCatalog);
page("/details/:id", showDetails);
page("/create", showCreateTattoo);
page("/edit/:id", showEdit);
page("/delete/:id", onDelete);

page.start();

updateNav();