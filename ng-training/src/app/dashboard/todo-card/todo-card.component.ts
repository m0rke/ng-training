import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoCardComponent implements OnInit {

    @Input() todo!: Todo;

    constructor(private todoService: TodoService) { }

    ngOnInit(): void {
    }

    remove(todo: Todo) {
        this.todoService.removeTodo(todo);
    }

}
