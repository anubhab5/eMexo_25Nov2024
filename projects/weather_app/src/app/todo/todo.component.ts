import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TodoService, Todo } from '../todo.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  imports: [CommonModule, ReactiveFormsModule],
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todoForm: FormGroup;
  todos: Todo[] = [];
  constructor(private fb: FormBuilder, private todoService: TodoService) {
    this.todoForm = this.fb.group({ text: ['', Validators.required] });
  }
  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }
  addTodo() {
    if (this.todoForm.valid) {
      this.todoService.addTodo(this.todoForm.value.text);
      this.todoForm.reset();
    }
  }
  updateStatus(todo: Todo, status: 'pending' | 'active' | 'done') {
    this.todoService.updateStatus(todo.id, status);
  }
  deleteTodo(id: number) {
    this.todoService.deleteTodo(id);
  }
}
