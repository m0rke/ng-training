import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './login/loginpage.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardpageComponent } from './dashboard/dashboardpage.component';
import { DetailpageComponent } from './detail/detailpage.component';

const routes: Routes = [
    {
        path: '',
        component: LoginpageComponent,
    },
    {
        path: 'dashboard',
        component: DashboardpageComponent,
    },
    {
        path: 'detail/:id',
        component: DetailpageComponent,
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)],
  exports: [
      RouterModule
  ]
})
export class AppRoutesModule { }
