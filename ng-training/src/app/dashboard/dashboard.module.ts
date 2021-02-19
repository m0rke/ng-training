import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardpageComponent } from './dashboardpage.component';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { AppRoutesModule } from '../app-routes.module';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbButtonsModule } from '@ng-bootstrap/ng-bootstrap';
import { PipesModule } from '../pipes/pipes.module';
import { DirectivesModule } from '../directives/directives.module';



@NgModule({
  declarations: [DashboardpageComponent, TodoCardComponent, SearchbarComponent],
  imports: [
    CommonModule,
    AppRoutesModule,
    ReactiveFormsModule,
    NgbButtonsModule,
    PipesModule,
    DirectivesModule
  ]
})
export class DashboardModule { }
