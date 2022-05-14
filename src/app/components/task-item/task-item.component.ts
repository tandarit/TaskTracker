import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes, faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task : Task;
  faCoffee = faCoffee;
  faTimes = faTimes;

  constructor() { 
      this.task=new Task();
  }

  ngOnInit(): void {
  }

}
