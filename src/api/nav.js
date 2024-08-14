import { util } from "../utils/userUtil.js";

const userNav = document.querySelector("div[class='user']");
const guestNav = document.querySelector("div[class='guest']");

export async function updateNav() {
    let isUser = util.hasUser();
    if(isUser) {
        userNav.style.display = 'flex';
        guestNav.style.display = 'none';
    } else {
        userNav.style.display = 'none';
        guestNav.style.display = 'flex';
    }
}