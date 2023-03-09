import { createElement } from './helpers/control';
import { form } from './components/form/form';
import './global.scss';

window.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.body;
  const app = createElement(rootElement, 'div', 'app');
  app.append(form);
});
