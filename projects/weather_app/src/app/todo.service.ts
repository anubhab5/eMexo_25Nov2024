import { Injectable } from '@angular/core';

export interface Todo {
  id: number;
  text: string;
  status: 'pending' | 'active' | 'done';
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(text: string): void {
    this.todos.push({ id: Date.now(), text, status: 'pending' });
  }

  updateStatus(id: number, status: 'pending' | 'active' | 'done'): void {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) {
      todo.status = status;
    }
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter((t) => t.id !== id);
  }
}
