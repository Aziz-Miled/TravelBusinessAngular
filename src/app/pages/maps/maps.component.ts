import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Mission } from 'src/app/interfaces/Mission';
import { User } from 'src/app/interfaces/User';
import { MissionService } from 'src/app/services/MissionService';
import { UserService } from 'src/app/services/UserService';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  public user1: User;
  public user2: User;
  public editUser: User;
  public deleteUser: User;

  missions: Mission[];
  public editMission: Mission;
  public deleteMission: Mission;

  constructor(private userService: UserService, private missionService: MissionService) { }

  ngOnInit() {
    
    this.missionService.getMissions().subscribe(
      res=>{console.log(res); 
      this.missions=res;
    });
  
    this.getUserById4(4);
    this.getUserById5(5);
  }

  public getUserById4(userId : number): void {
    this.userService.getUserById(userId).subscribe({
      next: (response: User) => {
        this.user1 = response;
        console.log(response);
        },
      error: (error: HttpErrorResponse) => {
          alert(error.message);
        },
      complete: () => {
        console.log('complete');
        }
    });
  }

  public getUserById5(userId : number): void {
    this.userService.getUserById(userId).subscribe({
      next: (response: User) => {
        this.user2 = response;
        console.log(response);
        },
      error: (error: HttpErrorResponse) => {
          alert(error.message);
        },
      complete: () => {
        console.log('complete');
        }
    });
  }


  public onDeleteUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe({
      next: (response: void) => {
        console.log(response);
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
      complete: () => {
        console.log('complete');
      }
    });
  }

  public getMissions(): void {
    this.missionService.getMissions().subscribe({
      next: (response: Mission[]) => {
        this.missions = response;
        console.log(response);
        console.log(this.missions);
        },
      error: (error: HttpErrorResponse) => {
          alert(error.message);
        },
      complete: () => {
        console.log('complete');
        }
    });
  }

  public onOpenModal1(user: User, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'delete') {
      this.deleteUser = user;
      button.setAttribute('data-target', '#deleteUserModal');
    }
    container.appendChild(button);
    button.click();
  }

}
