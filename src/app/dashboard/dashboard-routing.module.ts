import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { dashboardRoutes } from './dashboard.routes';
import { DashboardComponent } from './dashboard.component';

// import { AuthGuardService } from './../auth/auth-guard.service';

const routes: Routes = [
    {
    path: '',
    component: DashboardComponent,
    children: dashboardRoutes,
    // canActivate: [ AuthGuardService ]
 },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }
