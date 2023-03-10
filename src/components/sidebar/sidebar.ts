import { createElement } from "../../helpers/control";
import './sidebar.scss';

const links = ['друзья', 'сообщения', 'музыка', 'новости'];

export const sidebar = createElement(null, 'div', 'sidebar');

links.forEach(link => {
    const item = createElement(sidebar, 'p', 'sidebar__item', link)
});