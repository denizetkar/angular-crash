import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddTask: boolean = false;
  private toggleAddTaskSubject = new Subject<boolean>();

  constructor() {}

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.toggleAddTaskSubject.next(this.showAddTask);
  }

  getToggleAddTaskObservable(): Observable<boolean> {
    return this.toggleAddTaskSubject.asObservable();
  }
}
