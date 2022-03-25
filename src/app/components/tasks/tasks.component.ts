import { Component, OnInit } from '@angular/core';
import { TASKS, Task } from 'src/tasks-mock';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  taskTitle: string = '';
  taskDescription: string = '';
  isAddingTask: boolean = false;
  completedTasks: Task[] = this.tasks.filter((t) => t.isCompleted === true);

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  onClick(): void {
    this.isAddingTask = true;
  }

  addTask() {
    const newTask: Task = {
      id: this.tasks.length + 1,
      title: this.taskTitle,
      description: this.taskDescription,
      isCompleted: false,
    };

    this.taskService.createTask(newTask).subscribe();

    this.isAddingTask = false;
    this.tasks.push(newTask);
    this.taskTitle = '';
    this.taskDescription = '';
  }

  deleteTask(task: Task) {
    this.taskService
      .removeTasks(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }

  completeTask(task: Task) {
    task.isCompleted = !task.isCompleted;
    this.taskService.markTaskAsCompleted(task).subscribe();
  }
}
