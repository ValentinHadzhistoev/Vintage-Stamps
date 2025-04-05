import { html, render } from 'lit-html';
import page from 'page';

const mainEl = document.querySelector('main');

export default async function showLoginPage() {
    render(loginTemplate(), mainEl);
}

function loginTemplate() {
    return html`   <section id="login">
    <div class="form">
      <h2>Login</h2>
      <form class="login-form">
        <input type="text" name="email" id="email" placeholder="email" />
        <input type="password" name="password" id="password" placeholder="password" />
        <button type="submit">login</button>
        <p class="message">
          Not registered? <a href="/register">Create an account</a>
        </p>
      </form>
    </div>
  </section>`};