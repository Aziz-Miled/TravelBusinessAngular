import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/Users';
import { UserService } from '../_services/user.service';
import { EventBusService } from '../_shared/event-bus.service';

import { EventData } from '../_shared/event.class';


@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  content?: string;
  user?: User[];

  constructor(private userService: UserService, private eventBusService: EventBusService) { }

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
      
      this.userService.getusers().subscribe(res => {
        console.log(res);
        this.user = res; });
      },
      err => {
        this.content = err.error.message || err.error || err.message;

        if (err.status === 403)
          this.eventBusService.emit(new EventData('logout', null));
      }
    );
  }
}
