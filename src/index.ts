import { createElement } from './components/control';
import { form } from './components/form';
import './global.scss';

window.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.body;
  const App = createElement(rootElement, 'div', 'app');
  App.append(form);
});
