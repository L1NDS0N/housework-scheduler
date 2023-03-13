import { DashboardRoutes } from './dashboard.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(DashboardRoutes)],
})
export class DashboardModule {}
