import { html, render } from 'lit-html';
import page from 'page';
import stampsService from '../api/stampService.js';
import { checkIsOwner } from '../utils.js';

const mainEl = document.querySelector('main');

export default async function showDetailsPage(ctx) {
  const stampId = ctx.params.id;
    const stamp = await stampsService.getById(stampId);
    console.log(stamp);

    const isOwner = checkIsOwner(stamp);
    render(detailsTemplate(stamp, isOwner), mainEl);
}

function detailsTemplate(stamp, isOwner) {
  return html`
    <section id="details">
      <div id="details-wrapper">
        <img id="details-img" src=${stamp.imageUrl} alt="Stamp Image" />
        <div>
          <p id="details-name">${stamp.name}</p>
          <div id="info-wrapper">
            <div id="details-year-description">
              <p id="year-description">
                Year of oldest stamps - <span id="year">${stamp.year}</span>
              </p>
              <p id="more-info">${stamp.details}</p>
            </div>
          </div>
          <h3>Stamp total likes: <span id="likes">0</span></h3>

          <div id="action-buttons">
            ${isOwner
              ? html`
                  <a href="/edit/${stamp._id}" id="edit-btn">Edit</a>
                  <a @click=${() => deleteStamp(stamp._id)} id="delete-btn">Delete</a>
                `
              : html`<a href="#" id="like-btn">Like</a>`}
          </div>
        </div>
      </div>
    </section>
  `;
}


async function deleteStamp(stampId) {
  const confirmDelete = confirm('Are you sure you want to delete this show?');

  if (confirmDelete) {
      try {
          await stampsService.deleteById(stampId);
          page.redirect('/dashboard');
      } catch (err) {
          alert(err.message);
      }
  }
}