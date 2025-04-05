import { html, render } from 'lit-html';
import page from 'page';

const mainEl = document.querySelector('main');

export default async function showEditPage() {
    render(editTemplate(), mainEl);
}

function editTemplate() {
    return html`   <section id="edit">
    <div class="form">
      <h2>Edit Post Stamp</h2>
      <form class="edit-form">
        <input type="text" name="name-input" id="name" placeholder="Stamp Name" />
        <input type="text" name="image-url-input" id="image-url" placeholder="Image URL" />
        <input type="number" id="year-input" name="year-input" placeholder="Year"  />
        <textarea id="more-info" name="more-info-textarea" placeholder="More Info" rows="8" cols="10"></textarea>
        <button type="submit">Edit</button>
      </form>
    </div>
  </section>`};