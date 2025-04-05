import { html, render } from 'lit-html';
import page from 'page';
import stampsService from '../api/stampService.js';

const mainEl = document.querySelector('main');

export default async function showEditPage(ctx) {
  const stampId = ctx.params.id;
  const stamp = await showsService.getById(stampId);
    render(editTemplate(stamp), mainEl);
}

function editTemplate(stamp) {
    return html`   <section id="edit">
    <div class="form">
      <h2>Edit Post Stamp</h2>
      <form @submit=${(e) => editStamp(e, stamp._id)} class="edit-form">
        <input type="text" name="name-input" id="name" placeholder="Stamp Name" />
        <input type="text" name="image-url-input" id="image-url" placeholder="Image URL" />
        <input type="number" id="year-input" name="year-input" placeholder="Year"  />
        <textarea id="more-info" name="more-info-textarea" placeholder="More Info" rows="8" cols="10"></textarea>
        <button type="submit">Edit</button>
      </form>
    </div>
  </section>`};


  async function editStamp(e, stampId) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const stampData = Object.fromEntries(formData);

    if (Object.values(stampData).some(val => val === '')) {
        return alert('All fields are required!');
    }

    try {
        const result = await stampsService.update(stampId, stampData);
        console.log(result);
        page.redirect(`/details/${stampId}`);
    } catch (err) {
        alert(err.message);
    }
}