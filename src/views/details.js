import { html, render } from "../api/lib.js";
import { dataService } from "../api/dataService.js";
import { util } from "../utils/userUtil.js";

const detailsTemp = (data, isOwner, isUser) => html`
<section id="details">
    <div id="details-wrapper">
      <img
        id="details-img"
        src="../..${data.imageUrl}"
        alt="example1"
      />
      <div>
        <div id="info-wrapper">
          <p id="details-type">${data.type}</p>
          <div id="details-description">
            <p id="user-type">${data.userType}</p>
            <p id="description">
              ${data.description}
            </p>
          </div>
          <h3>Like tattoo:<span id="like">0</span></h3>
          <!--Edit and Delete are only for creator-->
          ${isOwner ? getButtons(data._id) : ""}

        <!--Bonus - Only for logged-in users ( not authors )-->
        ${isUser ? getLikeBtn(data._id) : ""}
    </div>
        </div >
      </div >
    </div >
  </section >
    `

export async function showDetails(ctx) {
    const id = ctx.params.id;
    const tattoo = await dataService.getDetails(id);
    const isOwner = util.hasOwner(tattoo._ownerId);
    const isUser = util.hasUser();
    const data = await dataService.getDetails(id);
    render(detailsTemp(data, isOwner, isUser));

}

function getButtons(id) {
    return html`
    <<div id="action-buttons">
            <a href= "/edit/${id}" id="edit-btn">Edit</a>
            <a href="/delete/${id}" id="delete-btn">Delete</a>
        </div >
    `
}

function getLikeBtn(id) {
    return html`
    <a href="#" id="like-btn">Like</a>
    `
}
