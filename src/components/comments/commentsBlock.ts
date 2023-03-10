import { globalStore } from '../../Store';
import { createElement } from '../../helpers/control';
import { createComment } from './comment/comment';
import './commentsBlock.scss';

export const commentsBlock = createElement(null, 'div','comments-block');
commentsBlock.addEventListener('click', (e: MouseEvent) => {
    console.log(e);
    const target = e.target;
    

    if(target && target instanceof HTMLElement)  {
        const currentComment = target.closest('.comment');
        if(currentComment instanceof HTMLElement) {

            switch (target.dataset.id) {
                case 'delete':
                    globalStore.deleteComment(currentComment.id);
                    addComments()
                    break;
            
                case 'like':
                    globalStore.toggleLike(currentComment.id);
                    addComments();
                    break;            
            }
        }       
    }       
});

export function addComments() {
    commentsBlock.innerHTML ='';
    globalStore.getStore().forEach(comment => createComment(comment, commentsBlock));
}
addComments();