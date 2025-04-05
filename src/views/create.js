import { html, render } from 'lit-html';
import page from 'page';

const mainEl = document.querySelector('main');

export default async function showCreatePage() {
    render(createTemplate(), mainEl);
}

function createTemplate() {
    return html`   <section id="create">
    <div class="form">
      <h2>Add Post Stamp</h2>
      <form class="create-form">
        <input type="text" name="name-input" id="name-input" placeholder="Stamp Name" />
        <input type="text" name="image-url-input" id="image-url-input" placeholder="Image URL" />
        <input type="number" id="year-input" name="year-input" placeholder="year" />
        <textarea id="more-info-textarea" name="more-info-textarea" placeholder="More Info" rows="8" cols="10"></textarea>
        <button type="submit">Add Stamp</button>
      </form>
    </div>
  </section>`};