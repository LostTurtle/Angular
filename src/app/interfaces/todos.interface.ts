export interface TODO {
    _id: string;
    title: string;
    content: string;
    completed: boolean;
    createdBy: {
        id: string;
        name: string;
    };
    createdAt: string;
}

export const defaultTodo: TODO = {
    _id: '',
    title: '',
    content: '',
    completed: false,
    createdBy: {
        id: '',
        name: '',
    },
    createdAt: '',
}