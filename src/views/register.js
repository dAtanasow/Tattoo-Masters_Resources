import { register } from "../api/userService.js";
import { render, html } from "../api/lib.js";
import { util } from "../utils/userUtil.js";
import { updateNav } from "../api/nav.js";
import { page } from "../api/lib.js";

const registerTemp = () => html`
 <section id="register">
    <div class="form">
      <h2>Register</h2>
      <form @submit=${onRegister} class="register-form">
        <input
          type="text"
          name="email"
          id="register-email"
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          id="register-password"
          placeholder="password"
        />
        <input
          type="password"
          name="re-password"
          id="repeat-password"
          placeholder="repeat password"
        />
        <button type="submit">register</button>
        <p class="message">Already registered? <a href="/login">Login</a></p>
      </form>
    </div>
  </section>
`

export function showRegister() {
    render(registerTemp());
}

async function onRegister(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const rePass = formData.get("re-password");

    if (!email || !password) {
        alert("All fields are required");
        throw new Error(error.message);
    };

    if (password !== rePass) {
        alert("Passwords don't match");
        throw new Error(error.message);

    };

    const userData = await register({ email, password });
    util.setUser(userData);
    updateNav();
    page.redirect("/");

}