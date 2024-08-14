import { dataService } from "../api/dataService.js";
import { render, html, page } from "../api/lib.js";

const createTattooTemp = () => html`
<section id="create">
    <div class="form">
      <h2>Add tattoo</h2>
      <form @submit=${onSubmit} class="create-form">
        <input
          type="text"
          name="type"
          id="type"
          placeholder="Tattoo Type"
        />
        <input
          type="text"
          name="image-url"
          id="image-url"
          placeholder="Image URL"
        />
        <textarea
          id="description"
          name="description"
          placeholder="Description"
          rows="2"
          cols="10"
        ></textarea>
        <select id="user-type" name="user-type">
          <option value="" disabled selected>Select your role</option>
          <option value="Tattoo Artist">Tattoo Artist</option>
          <option value="Tattoo Enthusiast">Tattoo Enthusiast</option>
          <option value="First Time in Tattoo">
            First Time in Tattoo
          </option>
          <option value="Tattoo Collector">Tattoo Collector</option>
        </select>
        <button type="submit">Add tattoo</button>
      </form>
    </div>
  </section>
`

export async function showCreateTattoo() {
    render(createTattooTemp());
}

async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const type = formData.get("type");
    const img = formData.get("image-url");
    const description = formData.get("description");
    const userType = formData.get("user-type");

    if (!type || !img || !description || !userType) {
      alert("All fields are required");
      throw new Error(error.message);
    }
    
    await dataService.addTattoo({type, img, description, userType});
    page.redirect("/catalog");
}