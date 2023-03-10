export class dateHelper {

    static getDateToString() {
        const date = new Date();
        return `${date.getFullYear()}-${this.correctDate(date.getMonth() + 1)}-${this.correctDate(date.getDate())}`;
    }

    private static correctDate(date: number) {
        return date <  10 ? `0${date}` : date
    }
    
    static formateDate(date: string | number) {
        const currentDate = new Date(date);        
        
        const oneDay = 86400000;
        const twoDays = 172800000;
        const now = Date.now();
        let showData;
        
        if((now -  currentDate.valueOf()) < oneDay) {
            showData = `сегодня, ${currentDate.toLocaleTimeString(['ru-RU'], {hour: '2-digit', minute: '2-digit'})}`;
        } else if((now - currentDate.valueOf()) > oneDay && (now - currentDate.valueOf()) < twoDays) {
            showData = `вчера, ${currentDate.toLocaleTimeString(['ru-RU'], {hour: '2-digit', minute: '2-digit'})}`
        } else {
            showData = currentDate.toLocaleTimeString(['ru-RU'], {day: 'numeric', month: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'})
        }
        
        return showData;
    }
}