import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit, OnDestroy {

    destroy$ = new Subject();

    control = new FormControl();
    doneControl = new FormControl();

    constructor(private todoService: TodoService) { }

    ngOnInit(): void {
        this.control.valueChanges.pipe(
            takeUntil(this.destroy$),
            debounceTime(500),
        ).subscribe(value => this.todoService.setFilter(value));

        this.doneControl.valueChanges.pipe(
            takeUntil(this.destroy$),
            debounceTime(500),
        ).subscribe(value => this.todoService.setFilterStatus(value));
    }

    ngOnDestroy(): void {
        this.destroy$.next();
    }

}
