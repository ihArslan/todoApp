import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITodo } from '../../../core/models/todo.model';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../../core/services/todo.service';

export type ITodoType = 'done' | 'normal' | 'important';
export const ITodoStatus = ['done', 'normal', 'important'];
@Component({
  selector: 'app-todo-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-cart.component.html',
  styleUrl: './todo-cart.component.css'
})
export class TodoCartComponent {
  constructor(private todoService: TodoService) {

  }
  @Input() type: ITodoType = 'normal';
  @Input() todo!: ITodo;
  @Output() updateTodo = new EventEmitter()
  @Input() isupdating: boolean = false

  removeTodo(data: ITodo) {
    this.todoService.deleteTodo(data)
  }
  _updateTodo(todo: ITodo) {
    this.updateTodo.emit(todo)

  }
}
