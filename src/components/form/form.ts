import { createElement } from '../../helpers/control';
import { dateHelper } from '../../helpers/dateHelper';
import { formHelper } from '../../helpers/formHelper';
import { addComments } from '../comments/commentsBlock';
import './form.scss';

export const form = createElement(null, 'form', 'form') as HTMLFormElement;
const title = createElement(form, 'h3','form__title', 'Ваш комментарий');


const nameLabel = createElement(form, 'label', 'form__label');
nameLabel.textContent = 'Имя: ';
const errorBlockName = formHelper.createErrorBlock(nameLabel,'длина от 4 до 30 символов', true);

const nameInput = createElement(form, 'input', 'form__input') as HTMLInputElement;
nameInput.setAttribute('placeholder', 'введите имя');
nameInput.setAttribute('name', 'name');


nameInput.addEventListener('input', () => {
    changeHelper(nameInput, 4, 30, errorBlockName);    
});
nameInput.addEventListener('blur', () => {
    changeHelper(nameInput, 2, 300, errorBlockName);     
});

const textLabel = createElement(form, 'label', 'form__label');
textLabel.textContent = 'Комментарий';
const errorBlockText = formHelper.createErrorBlock(textLabel,'длина от 1 до 300 символов', true);


const textInput = createElement(form, 'textarea', 'form__textarea') as HTMLTextAreaElement;
textInput.setAttribute('name', 'comment');

textInput.addEventListener('input', () => {
    changeHelper(textInput, 2, 300, errorBlockText);     
});
textInput.addEventListener('blur', () => {
    changeHelper(textInput, 2, 300, errorBlockText);     
});

const dateLabel = createElement(form, 'label', 'form__label');
dateLabel.textContent = 'Дата:';

const dateInput = createElement(form, 'input', 'form__date') as HTMLInputElement;
dateInput.setAttribute('type', 'date');
dateInput.setAttribute('value','');
dateInput.setAttribute('name', 'date');
dateInput.setAttribute('max', dateHelper.getDateToString());

const submitBtn = createElement(form, 'button', 'form__btn') as HTMLButtonElement;
submitBtn.setAttribute('type', 'submit');
submitBtn.textContent = 'Отправить';
submitBtn.disabled = true;

textInput.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        submitForm(e); 
    }
})
form.addEventListener('submit', (e) => {
        submitForm(e);    
}); 


function changeHelper(elem: HTMLInputElement | HTMLTextAreaElement, min: number, max: number, errorBlock: HTMLElement) {
    const isValid = formHelper.validate(elem.value, min, max);
    errorBlock.hidden =  isValid;
    
    !isValid ? elem.classList.add('invalid') : elem.classList.remove('invalid');
    submitBtn.disabled = !errorBlock.hidden;
};

function submitForm(e: SubmitEvent | KeyboardEvent) {
    e.preventDefault();
    formHelper.addData(nameInput.value, textInput.value, dateInput.value );    
    form.reset();
    addComments();
}