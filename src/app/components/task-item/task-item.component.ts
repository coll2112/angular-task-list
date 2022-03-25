import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {
  faCheckCircle,
  faXmarkCircle,
} from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/tasks-mock';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task | undefined;
  @Output() deleteTaskClick = new EventEmitter();
  @Output() completeTaskClick = new EventEmitter();

  checkIcon = faCheckCircle;
  XIcon = faXmarkCircle;

  constructor() {}

  ngOnInit(): void {}

  onXClick() {
    this.deleteTaskClick.emit();
  }

  onCheckClick() {
    this.completeTaskClick.emit();
  }
}
