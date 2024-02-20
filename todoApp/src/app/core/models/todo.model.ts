import { ITodoType } from "../../shared/components/todo-cart/todo-cart.component";

export interface ITodo {
    id?: number;
    description: string;
    date: string;
    time: string;
    statu: ITodoType;
}
export interface ILogin {
    username: string;
    password: string;
}

