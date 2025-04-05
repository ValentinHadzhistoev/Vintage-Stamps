import { html, render } from 'lit-html';
import page from 'page';
import stampsService from '../api/stampService.js';

const mainEl = document.querySelector('main');

export default async function stampCreatePage() {
    render(createTemplate(), mainEl);
}

function createTemplate() {
    return html`   <section id="create">
    <div class="form">
      <h2>Add Post Stamp</h2>
      <form @submit=${createStamp}  class="create-form">
        <input type="text" name="name-input" id="name-input" placeholder="Stamp Name" />
        <input type="text" name="image-url-input" id="image-url-input" placeholder="Image URL" />
        <input type="number" id="year-input" name="year-input" placeholder="year" />
        <textarea id="more-info-textarea" name="more-info-textarea" placeholder="More Info" rows="8" cols="10"></textarea>
        <button type="submit">Add Stamp</button>
      </form>
    </div>
  </section>`};

async function createStamp(e) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const imageUrl =  formData.get('image-url-input');
  const name =  formData.get('name-input');
  const year =  formData.get('year-input');
  const learnMore = formData.get('more-info-textarea');

  const stampData = {
    imageUrl,
    name,
    year,
    learnMore,
  }

  if (Object.values(stampData).some(val => val === '')) {
      return alert('All fields are required!');
  }

  try {
      const result = await stampsService.create(stampData);
      console.log(result);
      page.redirect('/dashboard');
  } catch (err) {
      alert(err.message);
  }
}