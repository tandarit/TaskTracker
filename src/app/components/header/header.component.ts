import { Component, OnInit } from '@angular/core';
import { interval, Subscription, take, tap } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title:string = "Task Tracker";
  showAddTask : boolean = true;
  subscription : Subscription;

  constructor(private uiService : UiService, private router : Router) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask=value));
   }

  ngOnInit(): void {
  }

  toggleAddTask(): void {
    console.log("header components");
    this.uiService.toggleAddTask(); 

  }

  hasRoute(route:string) : boolean {
    return this.router.url === route;
  }

}
