import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }

  toggleReminder(task: Task) {
    let taskCopy: Task = Object.assign({}, task);
    taskCopy.reminder = !taskCopy.reminder;
    this.taskService
      .updateTaskReminder(taskCopy)
      .subscribe(() => (task.reminder = !task.reminder));
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((t) => this.tasks.push(t));
  }
}
