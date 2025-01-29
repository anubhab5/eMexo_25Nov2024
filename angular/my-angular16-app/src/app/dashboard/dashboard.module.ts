import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MyIndiaComponent } from '../my-india/my-india.component';
import { DemosvcService } from '../demosvc.service';

@NgModule({
  declarations: [DashboardComponent, MyIndiaComponent],
  imports: [CommonModule],
  exports: [DashboardComponent],
  providers: [DemosvcService],
})
export class DashboardModule {}
