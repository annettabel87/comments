import { IFormData, commentsData } from "../commentsData";
import { createElement } from "./control";
import { dateHelper } from "./dateHelper";

export class formHelper {    

    static addData(nameValue: string, textValue: string, dateValue: string) {
        const data: IFormData = {};
        data.id = Date.now();
        data.name = nameValue;
        data.comment = textValue;
        data.date = dateValue ? dateValue : dateHelper.getDateToString();        
        commentsData.push(data);        
    }  

    static validate(value: string, min: number, max: number) {
        return value.length >= min   && value.length <= max ? true : false
    }

    static createErrorBlock(parent: HTMLElement, text: string, isShow: boolean) {        
        const errorBlock = createElement(parent, 'div', 'error', '');
        errorBlock.innerText =  text;
        errorBlock.hidden  = isShow;   
        return errorBlock;     
    }
}

