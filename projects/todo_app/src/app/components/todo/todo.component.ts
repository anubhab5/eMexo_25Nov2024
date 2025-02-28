import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { ToastrService } from 'ngx-toastr';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [],
})
export class TodoComponent implements OnInit {
  // @Input() todoInput;
  @Input()
  todoInput!: Todo;

  completed: boolean = false;
  todo!: Todo;

  constructor(
    public todoService: TodoService,
    private toasterService: ToastrService
  ) {}

  ngOnInit(): void {}

  onChange() {
    console.log('changed');
    this.completed = !this.completed;
    this.completed
      ? this.toasterService.success(`Todo succesfully completed`, 'completed')
      : '';
  }

  onCliCk(e: Event) {
    console.log('Clicked');
    console.log(e);
  }

  toggleClass() {
    if (this.completed) {
      // return 'list-item-success';
      return {
        'list-group-item-success': this.completed,
        'border-primary': this.completed,
      };
    }
    return;
  }

  deleteTodo(item: Todo) {
    this.todo = item;
    this.todoService.deleteTodo(item);
    this.toasterService.error(
      `Todo ${item.id} Deleted!`,
      'Deleted Successfuly'
    );
  }
  isFavorite() {
    debugger;
    this.todoInput.isFavorite = !this.todoInput.isFavorite;
    if (this.todoInput.isFavorite) {
      this.todoService.fav.unshift(this.todoInput);
      localStorage.setItem('favorite', JSON.stringify(this.todoService.fav));
      this.toasterService.success('Todo Added to Favorite', '');
    } else {
      let index = this.todoService.todoList.indexOf(this.todo);
      this.todoService.fav.splice(index, 1);

      localStorage.setItem('favorite', JSON.stringify(this.todoService.fav));
      this.toasterService.error('Todo Removed from Favorite');
    }
  }
}
