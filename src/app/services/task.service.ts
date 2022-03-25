import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TASKS, Task } from 'src/tasks-mock';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  apiUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  removeTasks(task: Task): Observable<Task> {
    const taskItemUrl = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(taskItemUrl);
  }

  markTaskAsCompleted(task: Task): Observable<Task> {
    const taskItemUrl = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(taskItemUrl, task, httpOptions);
  }

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }
}
