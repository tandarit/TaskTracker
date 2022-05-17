import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask : boolean = true;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTask()  {
    console.log("toggleAddTask");
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  onToggle() : Observable<any> {
    console.log("onToggle");
    return this.subject.asObservable();
  }

}
