import { dataService } from "../api/dataService.js"
import { html, render } from "../api/lib.js";

const catalogTemp = (posts) => html`
<h2>Collection</h2>
    <section id="tattoos"> 
    ${!posts ? missingTattoosTemp() : posts.map(post => infoTemp(post))}
    </section>
`
const infoTemp = (post) => html`
    <div class="tattoo">
      <img src="../..${post.imageUrl}" alt="example1" />
      <div class="tattoo-info">
        <h3 class="type">${post.type}</h3>
        <span>Uploaded By</span>
        <p class="user-type">${post.userType}</p>
        <a class="details-btn" href="details/${post._id}">Learn More</a>
      </div>
    </div >
    `
const missingTattoosTemp = () => html`<h2 id="no-tattoo">Collection is empty, be the first to contribute</h2>`

export async function showCatalog() {
    let data = await dataService.getAllTattoos();
    render(catalogTemp());
}
