import { html, render } from 'lit-html';
import page from 'page';
import stampsService from '../api/stampService.js';

const mainEl = document.querySelector('main');

export default async function showDashboardPage() {
  const stamps = await stampsService.getAll();
    console.log(stamps);
    render(dashboardTemplate(stamps), mainEl);
}

function dashboardTemplate(stamps) {
    return html`
     <h2>Collection</h2>


    ${stamps.length > 0 ? html`
        <section id="collection">
          ${stamps.map(stamp => stampTemplate(stamp))}
          
        </section>  
        `  
        :  html`  < <h2 id="no-stamp">No Stamps Added.</h2>`}
        `
}
  
      function stampTemplate(stamp){
     return html`<div class="stamp">
    <img src=${stamp.imageUrl} alt="example1" />
    <div class="stamp-info">
      <h3 class="name">${stamp.name}</h3>
      <p class="year-description">
        Year of oldest stamps - <span class="year">${stamp.year}</span> 
      </p>
      <a class="learn-more-btn" href="/details/${stamp._id}">Learn More</a>
    </div>
  </div>`
}
