export class dateHelper {

    static getDateToString() {
        const date = new Date();
        return `${date.getFullYear()}-${this.correctDate(date.getMonth() + 1)}-${this.correctDate(date.getDate())}`;
    }

    private static correctDate(date: number) {
        return date <  10 ? `0${date}` : date
    }    
}