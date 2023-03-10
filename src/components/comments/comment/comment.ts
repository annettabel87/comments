import { IFormData } from '../../../Store';
import { dateHelper } from '../../../helpers/dateHelper';
import { createElement } from '../../../helpers/control';
import './comment.scss';

export const createComment = (commentData: IFormData, parent: HTMLElement) => {
    const comment = createElement(parent, 'div', 'comment');
    comment.id = commentData.id.toString();

    const name = createElement(comment, 'p', 'comment__bold', commentData.name);
    const text = createElement(comment, 'p', 'comment__text', commentData.comment);

    const date = createElement(comment, 'p', 'comment__light', dateHelper.formateDate(commentData.date));
    
    const likeBtn = createElement(comment, 'button', 'like-btn');
    likeBtn.dataset.id = 'like';
    
    commentData.isLiked ? likeBtn.classList.add('isLiked') :  likeBtn.classList.remove('isLiked');
    const deleteBtn = createElement(comment, 'button', 'delete-btn', 'x');
    deleteBtn.dataset.id = 'delete';   
    
}
