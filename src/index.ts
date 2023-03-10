import { createElement } from './helpers/control';
import { form } from './components/form/form';
import { commentsBlock } from './components/comments/commentsBlock';
import { sidebar } from './components/sidebar/sidebar';
import './global.scss';

window.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.body;
  const app = createElement(rootElement, 'div', 'app');
  const mainBlock = createElement(app, 'main', 'main');
  mainBlock.append(commentsBlock, form)
  app.append( sidebar, mainBlock);
});
