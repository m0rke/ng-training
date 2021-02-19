import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-dashboardpage',
  templateUrl: './dashboardpage.component.html',
  styleUrls: ['./dashboardpage.component.scss']
})
export class DashboardpageComponent implements OnInit {

    public todos$ = this.todoService.todos$;

    constructor(private todoService: TodoService) { }

    ngOnInit(): void {

    }

}
