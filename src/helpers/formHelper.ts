import { IFormData, globalStore } from "../Store";
import { createElement } from "./control";

export class formHelper {    

    static addData(nameValue: string, textValue: string, dateValue: string) {
        const data: IFormData = {
            id: Date.now(),
            isLiked: false,
            name: nameValue,
            comment: textValue,
            date: dateValue ? dateValue : Date.now().valueOf()
        };
        
        globalStore.addComment(data);                
    }  

    static validate(value: string, min: number, max: number) {
        return value.length >= min   && value.length <= max ? true : false;
    }

    static createErrorBlock(parent: HTMLElement, text: string, isShow: boolean) {        
        const errorBlock = createElement(parent, 'div', 'error', '');
        errorBlock.innerText =  text;
        errorBlock.hidden  = isShow;   
        return errorBlock;     
    }
}

