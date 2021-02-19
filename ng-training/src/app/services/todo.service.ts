import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Todo } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

    private filter$ = new BehaviorSubject('');
    private filterStatus$ = new BehaviorSubject(false);

    public _todos$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([
        {​​
            name: 'Modellseiten Update',
            description: 'Minions ipsum butt butt gelatooo para tú aaaaaah wiiiii poopayee daa daa. Belloo! tank yuuu! Hahaha tulaliloo wiiiii butt poopayee.',
            create_date: new Date(2021, 2, 13),
            date: new Date(2021, 5, 1),
            id: 0,
            done: false
        }​​,
        {​​
            name: 'Matomo report',
            description: 'Minions ipsum butt butt gelatooo para tú aaaaaah wiiiii poopayee daa daa. Belloo! tank yuuu! Hahaha tulaliloo wiiiii butt poopayee.',
            create_date: new Date(2021, 3, 9),
            date: new Date(2021, 9, 7),
            id: 1,
            done: false
        }​​,
        {​​
            name: 'Startseite Facelift',
            description: 'Minions ipsum butt butt gelatooo para tú aaaaaah wiiiii poopayee daa daa. Belloo! tank yuuu! Hahaha tulaliloo wiiiii butt poopayee.',
            create_date: new Date(2021, 4, 12),
            date: new Date(2022, 9, 7),
            id: 2,
            done: false
        }​​,
        {​​
            name: 'Datenbank Import',
            description: 'Minions ipsum butt butt gelatooo para tú aaaaaah wiiiii poopayee daa daa. Belloo! tank yuuu! Hahaha tulaliloo wiiiii butt poopayee.',
            create_date: new Date(2021, 1, 22),
            date: new Date(2021, 1, 23),
            id: 3,
            done: false
        }​​,
        {​​
            name: 'App Konzept erarbeiten',
            description: 'Minions ipsum butt butt gelatooo para tú aaaaaah wiiiii poopayee daa daa. Belloo! tank yuuu! Hahaha tulaliloo wiiiii butt poopayee.',
            create_date: new Date(2021, 5, 16),
            date: new Date(2021, 11, 5),
            id: 4,
            done: false
        }​​,
    ]);

    constructor() { }

    get todos$(): Observable<Todo[]> {

        return combineLatest([this.filterStatus$, this.filter$]).pipe(
            switchMap(filter => this._todos$.pipe(
                map(todos => todos.filter(todo => filter[0] || !todo.done)),
                map(todos => todos.filter(todo => !filter[1] || todo.name.toLowerCase().indexOf(filter[1]) > -1))
            ))
        )

        // return this.filter$.asObservable().pipe(
        //     switchMap(val => this._todos$.pipe(
        //         map(todos => todos.filter(todo => val == '' || todo.name.toLowerCase().indexOf(val) > -1))
        //     ))
        // )
    }

    getTodo(id: string): Todo {
        return this._todos$.getValue().find((todo) => todo.id.toString() === id) as Todo;
    }

    removeTodo(todo: Todo): void {
        const tmp = this._todos$.getValue();

        const index  = tmp.findIndex(arrtodo => arrtodo.id === todo.id);

        tmp.splice(index, 1);

        this._todos$.next(tmp);
    }

    setFilter(value: string) {
        this.filter$.next(value)
    }

    setFilterStatus(value: boolean) {
        this.filterStatus$.next(value);
    }
}
