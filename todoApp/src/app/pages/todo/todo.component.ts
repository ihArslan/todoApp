import { Component, OnInit } from '@angular/core';
import { ITodo } from '../../core/models/todo.model';
import { TodoService } from '../../core/services/todo.service';
import { CommonModule } from '@angular/common';
import { TodoCartComponent } from '../../shared/components/todo-cart/todo-cart.component';
import { HeaderComponent } from '../../shared/layouts/header/header.component';
import { SlidePanelComponent } from '../../shared/ui/slide-panel/slide-panel.component';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, TodoCartComponent, HeaderComponent, SlidePanelComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {
  todos: ITodo[] = []
  todoForm!: FormGroup;
  isSlidePanelOpen: boolean = false
  text: string = ''
  isupdateBtn = 'DÜZENLE';
  isaddTodoBtn = '+EKLE'
  isUpdate: boolean = false;
  updatingTodoIndex: number = -1;
  fullDate = new Date()
  date = `${this.fullDate.toISOString().split('T')[0]}`;
  time = `${this.fullDate.toTimeString().slice(0, 5)}`

  constructor(private todoService: TodoService, private formBuilder: FormBuilder) {
    this.todoForm = formBuilder.group({
      id: new FormControl(''),
      description: new FormControl('', [Validators.required]),
      date: new FormControl(this.date, [Validators.required]),
      time: new FormControl(this.time, [Validators.required]),
      statu: new FormControl('normal', [Validators.required])
    })
  }

  getAllTodos() {
    this.todos = this.todoService.getAllTodo()
  }
  ngOnInit(): void {
    this.getAllTodos()
  }
  addSlidePanel() {
    this.openSlidePanel()
    this.isUpdate = true
    this.text = 'Görev Oluştur'
    this.filterByStatu('')

  }
  openSlidePanel() {
    this.isSlidePanelOpen = true;
  }
  onCloseSladePanel() {
    this.todoForm.reset({
      date: this.date,
      time: this.time,
      statu: 'normal'
    })
    this.isSlidePanelOpen = false;
    this.isUpdate = false
    this.text = 'Görev Düzenle'

  }
  onClose() {
    this.onCloseSladePanel()
  }
  filterByStatu(statu: string) {
   this.todos = this.todoService.filterTodos(statu)

  }
  updateTodoMain(data: ITodo) {
    console.log(data);
    console.log(this.todos.indexOf(data));
    this.updatingTodoIndex = this.todos.indexOf(data);
    this.openSlidePanel();
    this.todoForm.setValue(data)
  }

  onSubmit(data: ITodo) {
    if (this.todoForm.get('description')?.valid && this.isUpdate) {
      this.todoService.addTodo(data);
      this.filterByStatu('')
      this.todoForm.reset({
        date: this.date,
        time: this.time,
        statu: 'normal'
      })
      this.onCloseSladePanel()
    } else if (this.todoForm.get('description')?.valid && !this.isUpdate) {
      this.todos[this.updatingTodoIndex] = data;
      this.onCloseSladePanel()
    } else {
      this.todoForm.markAllAsTouched();
    }
  }
}









