class Store {
    private store: IFormData[] = [
        {
            id: 1,
            name: 'Anna',
            comment: 'hello',
            date: '01.01.2022 16:58',
            isLiked: true
        },
        {
            id: 2,
            name: 'Алексей',
            comment: 'hello',
            date: '10.03.2023 16:58',
            isLiked: true
        },   
    ];

    addComment(comment: IFormData) {
        this.store.push(comment);
    };

    getStore(){
        return this.store;
    };

    deleteComment(id: string) {
        this.store =  [...this.store].filter(item => item.id !==  +id)
    };

    toggleLike(id: string) {
        this.store =  [...this.store].map(item => {
           return item.id === +id ? {...item, isLiked:  !item.isLiked} : item
        });        
    };
}

export interface IFormData {
    id: number;
    name: string,
    comment: string,
    date: string | number,
    isLiked: boolean
}

export const globalStore = new Store();