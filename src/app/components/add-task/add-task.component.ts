import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter<Task>();
  text : string = "";
  day: string = "";
  reminder : boolean = false;

  showAddTask : boolean = true;
  subscription : Subscription;

  constructor(private uiService: UiService) { 
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    // Unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}


  onSubmit() {
    if(!this.text) {
      alert("There are no text!");
      return;
    }
    const newTask = {
      text : this.text,
      day : this.day,
      reminder : this.reminder
    }

    //emit event
    this.onAddTask.emit(newTask);

    this.text="";
    this.day="";
    this.reminder=false;
  }

}
