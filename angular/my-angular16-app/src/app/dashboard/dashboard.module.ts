import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MyIndiaComponent } from '../my-india/my-india.component';

@NgModule({
  declarations: [DashboardComponent, MyIndiaComponent],
  imports: [CommonModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
