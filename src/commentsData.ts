 export const commentsData: IFormData[] = [
    {
        id: 1,
        name: 'Anna',
        comment: 'hello',
        date: '01.01.2022'
    }
]

export interface IFormData {
    id?: number;
    name?: string,
    comment?: string,
    date?: string
}

