import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Schedule, SchedulesService } from './../../services/schedules.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public modalRef = new BsModalRef();
  schedules: Schedule[] = [];
  isLoading = false;

  constructor(
    private modalService: BsModalService,
    private schedulesService: SchedulesService
  ) {}
  ngOnInit(): void {
    this.refreshSchedules();
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  public closeModal() {
    this.modalService.hide();
  }

  remove(id: number) {
    if (confirm('Tem certeza que deseja remover este item?'))
      try {
        this.schedulesService.delete(id);
        this.refreshSchedules();
      } catch (error) {
        alert(error);
      }
  }
  done(schedule: Schedule) {
    try {
      schedule.done = !schedule.done;
      this.schedulesService.done(schedule);
      this.refreshSchedules();
    } catch (error) {
      alert(error);
    }
  }

  public refreshSchedules() {
    this.isLoading = true;
    this.schedulesService.getAllSchedules().subscribe((res) => {
      this.schedules = res;
      this.isLoading = false;
    });
  }
}
