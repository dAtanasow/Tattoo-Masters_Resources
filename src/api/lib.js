import page from "../../node_modules/page/page.mjs";
import { html, render as renderBase } from "../../node_modules/lit-html/lit-html.js"

const root = document.querySelector("main");

function render(temp) {
    renderBase(temp, root)
}

export {
    page, html, render
}