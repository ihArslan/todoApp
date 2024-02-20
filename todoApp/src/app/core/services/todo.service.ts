import { Injectable } from '@angular/core';
import { ITodo } from '../models/todo.model';



@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: ITodo[] = [
    { id: 1, description: "Araç oto yıkamaya bırakılacak.", date: "2024-02-10", time: "10:00", statu: "normal" },
    { id: 2, description: "SpaceX canlı yayını takip edilecek.", date: "2024-02-09", time: "23:00", statu: "important" },
    { id: 4, description: "Robatik kodlama eğiitmlerine giriş derslerine başlanacak.", date: "2024-02-08", time: "12:00", statu: "normal" },
    { id: 5, description: "Rxjs kütüphanesinin derslerinin tekrarı yapılacak.", date: "2024-02-06", time: "10:00", statu: "done" },
  ]
  filteredTodos: ITodo[] = []

  constructor() { }

  getAllTodo() {
    return this.todos
  }

  addTodo(data: ITodo) {
    this.todos.unshift(data);
    this.getAllTodo()
  }

  deleteTodo(todo: ITodo) {
    this.todos.splice(this.todos.indexOf(todo), 1)
    this.getAllTodo()
  }

  filterTodos(data: string) {
    if (data != '') {
      this.filteredTodos = []
      this.filteredTodos = this.todos.filter(todo => {
        return todo.statu == data
      })
      return this.filteredTodos
    } else {
      return this.getAllTodo()
    }
  }
}
