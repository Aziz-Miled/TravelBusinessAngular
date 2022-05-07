import { Component, OnInit } from '@angular/core';
import { Invitation } from 'src/models/Invitation';
import { UserService } from '../_services/user.service';
import { EventBusService } from '../_shared/event-bus.service';
import { EventData } from '../_shared/event.class';


@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {
  content?: string;
  listinvit?: Invitation[];
  currentUser: any;
  isDisabled = false;

  constructor(private userService: UserService, private eventBusService: EventBusService) { }

  ngOnInit(): void {
    this.userService.getUserBoard().subscribe(
      data => {
        this.content = data;

        
        this.userService.getinvitbyid(this.currentUser.id).subscribe(res => {
          console.log(res);
          this.listinvit = res; // @ts-ignore
          this.listinvit = Array.of(this.listinvit);


        });
        
      },
      err => {
        this.content = err.error.message || err.error || err.message;

        if (err.status === 403)
          this.eventBusService.emit(new EventData('logout', null));
      }
    );
  }
}
