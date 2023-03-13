import { DashboardComponent } from './../dashboard/dashboard.component';
import {
  NewSchedule,
  SchedulesService,
} from './../../services/schedules.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule-creator',
  templateUrl: './schedule-creator.component.html',
  styleUrls: ['./schedule-creator.component.scss'],
})
export class ScheduleCreatorComponent {
  schedule: NewSchedule = {} as NewSchedule;

  constructor(
    private schedulesService: SchedulesService,
    private dashboard: DashboardComponent
  ) {}

  create() {
    if (!this.schedule.priority || !this.schedule.task) return;

    try {
      this.schedulesService.create(this.schedule);
      this.clearSchedule();
      this.dashboard.closeModal();
      this.dashboard.refreshSchedules();
    } catch (error) {
      alert(error);
    }
  }

  clearSchedule() {
    this.schedule = {} as NewSchedule;
  }
}
