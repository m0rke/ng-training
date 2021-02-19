import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../interfaces/interface';
import { TodoService } from '../services/todo.service';


@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.scss']
})
export class DetailpageComponent implements OnInit {

    todo!: Todo;

    constructor(private todoService: TodoService, private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.todo = this.todoService.getTodo(this.activatedRoute.snapshot.params.id);
    }

}
