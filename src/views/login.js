import { login } from "../api/userService.js";
import { render, html } from "../api/lib.js";
import { util } from "../utils/userUtil.js";
import { updateNav } from "../api/nav.js";
import { page } from "../api/lib.js";


const loginTemp = () => html`
   <section id="login">
    <div class="form">
      <h2>Login</h2>
      <form @submit=${onLogin} class="login-form">
        <input type="text" name="email" id="email" placeholder="email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
        <button type="submit">login</button>
        <p class="message">
          Not registered? <a href="/register">Create an account</a>
        </p>
      </form>
    </div>
  </section>
`

export function showLogin() {
    render(loginTemp());
}

async function onLogin(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
        alert("All fields are required");
        throw new Error(error.message)
    };

    const userData = await login({ email, password });
    util.setUser(userData);
    updateNav();
    page.redirect("/");
}