import { dataService } from "../api/dataService.js";
import { render, html, page } from "../api/lib.js";

const editTemp = (tattoo) => html`
 <section id="edit">
    <div class="form">
      <h2>Edit tattoo</h2>
      <form @submit=${onSubmit} class="edit-form">
        <input
          type="text"
          name="type"
          id="type"
          placeholder="Tattoo Type"
          value= ${tattoo.type}
        />
        <input
          type="text"
          name="image-url"
          id="image-url"
          placeholder="Image URL"
          value= ${tattoo.img}
        />
        <textarea
          id="description"
          name="description"
          placeholder="Description"
          rows="2"
          cols="10"
          .value= ${tattoo.description}
        ></textarea>
        <select id="user-type" name="user-type" .value=${tattoo.userType}>
          <option value="" disabled selected>Select your role</option>
          <option value="Tattoo Artist">Tattoo Artist</option>
          <option value="Tattoo Enthusiast">Tattoo Enthusiast</option>
          <option value="First Time in Tattoo">
            First Time in Tattoo
          </option>
          <option value="Tattoo Collector">Tattoo Collector</option>
        </select>
        <button type="submit">Edit</button>
      </form>
    </div>
  </section>
`
let tattooId = null
export async function showEdit(ctx) {
  tattooId = ctx.params.id;
  const tattoo = await dataService.getDetails(tattooId);
  render(editTemp(tattoo));
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

  await dataService.editTattoo(tattooId, { type, img, description, userType });
  page.redirect(`/details/${tattooId}`);
}
