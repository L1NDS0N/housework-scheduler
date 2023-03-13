import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from './../app.config';
import { useMyHeaders } from './authentication.service';

export interface Schedule {
  id: number;
  user_id: string;
  task: string;
  priority: string;
  done: boolean;
  created_at: Date;
  updated_at: Date;
}
export interface NewSchedule {
  task: string;
  priority: 'ALTA' | 'MEDIA' | 'BAIXA';
}

@Injectable({
  providedIn: 'root',
})
export class SchedulesService {
  private apiResource = AppConfig.apiUrl + '/schedules';

  constructor(private api: HttpClient) {}

  getAllSchedules(): Observable<Schedule[]> {
    return this.api.get<Schedule[]>(this.apiResource, {
      headers: useMyHeaders(),
    });
  }

  create(schedule: NewSchedule) {
    this.api
      .post<Schedule | any>(this.apiResource, schedule, {
        headers: useMyHeaders(),
      })
      .subscribe((res) => {
        if (res.message) {
          throw new Error(res.message? res.message : 'Erro durante criação do novo item');
        }
      });
  }

  done(schedule: Schedule) {
    this.api
      .put<any>(this.apiResource + '/' + schedule.id + '/done', schedule, {
        headers: useMyHeaders(),
      })
      .subscribe((res) => {
        if (res.message) {
          throw new Error(
            res.message ? res.message : 'Erro durante conclusão do item'
          );
        }
      });
  }

  delete(id: number) {
    this.api
      .delete<any>(this.apiResource + '/' + id, {
        headers: useMyHeaders(),
      })
      .subscribe((res) => {
        if (res.message) {
          throw new Error(
            res.message ? res.message : 'Erro durante exclusão do item'
          );
        }
      });
  }
}
