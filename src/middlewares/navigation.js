import { html, render } from 'lit-html';
import page from 'page';
import { getToken } from '../utils.js';

import usersService from '../api/usersService.js';


const headerEl = document.querySelector('header');

export default function showNavigation(ctx, next) {
    const token = getToken();
    render(navigationTemplate(token), headerEl);
    next();
}

function navigationTemplate(token) {
    return html`<!-- Navigation -->
    <a id="logo" href="/"><img id="logo-img" src="/images/logo.webp" alt="logo" />
    </a>
    <nav>
      <div>
        <a href="/dashboard">Collection</a>
      </div>

      <!-- Logged-in users -->
       ${token ? html`<div class="user">
        <a href="/create">Add Stamp</a>
        <a href="#">Logout</a>
      </div>` : html`<!-- Guest users -->
      <div class="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div>
    </nav>`}`}
      

      