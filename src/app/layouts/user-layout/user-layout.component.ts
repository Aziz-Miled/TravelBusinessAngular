import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Mission } from 'src/app/interfaces/Mission';
import { MissionAffectation } from 'src/app/interfaces/MissionAffectation';
import { TravelProgram } from 'src/app/interfaces/TravelProgram';
import { User } from 'src/app/interfaces/User';
import { MissionAffectationService } from 'src/app/services/MissionAffectationService';
import { MissionService } from 'src/app/services/MissionService';
import { TravelProgramService } from 'src/app/services/TravelProgramService';
import { UserService } from 'src/app/services/UserService';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements OnInit {

  public user: User;
  public userIds: number[] = [2,3,11];
  public users: User[] = [];
  public editUser: User;
  public deleteUser: User;

  public missions: Mission[];
  public missionsIds: number[] = [1,4,5,9];
  public missionCompany: Mission[] = [];
  public mission: Mission;
  public editMission: Mission;
  public deleteMission: Mission;

  public missionAffectation: MissionAffectation;
  public missionAffectations: MissionAffectation[];
  public missionAffectationsCompany: MissionAffectation[] = [];
  public editMissionAffectation: MissionAffectation;
  public deleteMissionAffectation: MissionAffectation;
  public missionAffectationId: number[] = [1,4];

  public travelPrograms: TravelProgram[];

  constructor(private userService: UserService, private missionService: MissionService, private missionAffectationService: MissionAffectationService, private travelProgramService: TravelProgramService) { }

  ngOnInit() {
    
    for ( let n = 0 ; n < this.missionsIds.length ; n++) {
      this.getMissionById(this.missionsIds[n]);
    }

    for ( let n = 0 ; n < this.userIds.length ; n++) {
      this.getUserById(this.userIds[n]);
    }

    this.getMissions();
    this.getMissionAffectations();
    this.getTravelPrograms();
  
    this.getMissionAffectationById(this.missionAffectationId);
  }

  public getUserById(userId : number): void {
    this.userService.getUserById(userId).subscribe({
      next: (response: User) => {
        if (this.users.includes(response)){
          console.log("User already exists");
          console.log(response);
        } else {
          this.user = response;
          this.users.push(response);
          console.log(response);
        }
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
        window.location.reload();
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

  public getMissionById(missionId : number): void {
    this.missionService.getMissionById(missionId).subscribe({
      next: (response: Mission) => {
        if (this.missionCompany.includes(response)){
          console.log("Mission already exists");
          console.log(response);
        } else {
          this.mission = response;
          this.missionCompany.push(response);
          console.log(response);
        }
      },
      complete: () => {
        console.log('complete');
      }
    });
  }

  public onAddMission(addForm: NgForm): void {
    document.getElementById('add-mission-form').click();
    this.missionService.addMission(addForm.value).subscribe({
      next: (response: Mission) => {
        console.log(response);
        window.location.reload();
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      },
      complete: () => {
        console.log('complete');
      }
    });
  } 

  public onUpdateMission(mission: Mission): void {
    this.missionService.updateMission(mission).subscribe({
      next: (response: Mission) => {
        console.log(response);
        window.location.reload();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
      complete: () => {
        console.log('complete');
      }
    });
  }

  public onDeleteMission(missionId: number): void {
    this.missionService.deleteMission(missionId).subscribe({
      next: (response: void) => {
        console.log(response);
        window.location.reload();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
      complete: () => {
        console.log('complete');
      }
    });
  }

  public getMissionAffectations(): void {
    this.missionAffectationService.getMissionAffectations().subscribe({
      next: (response: MissionAffectation[]) => {
        this.missionAffectations = response;
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

  public getMissionAffectationById(missionaffectationId : number[]): void {
    this.missionAffectationService.getMissionAffectationById(missionaffectationId).subscribe({
      next: (response: MissionAffectation) => {
        if (this.missionAffectationsCompany.includes(response)){
          console.log("Mission already exists");
          console.log(response);
        } else {
          this.missionAffectation = response;
          this.missionAffectationsCompany.push(response);
          console.log(response);
        }
      },
      complete: () => {
        console.log('complete');
      }
    });
  }

  public onAddMissionAffectation(addForm: NgForm): void {
    document.getElementById('add-missionaffectation-form').click();
    this.missionAffectationService.addMissionAffectation(addForm.value).subscribe({
      next: (response: MissionAffectation) => {
        console.log(response);
        this.getMissionAffectations();
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      },
      complete: () => {
        console.log('complete');
      }
    });
  } 

  public onUpdateMissionAffectation(missionAffectation: MissionAffectation): void {
    this.missionAffectationService.updateMissionAffectation(missionAffectation).subscribe({
      next: (response: MissionAffectation) => {
        console.log(response);
        this.getMissionAffectations();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
      complete: () => {
        console.log('complete');
      }
    });
  }

  public onDeleteMissionAffectation(missionAffectationId: number): void {
    this.missionAffectationService.deleteMissionAffectation(missionAffectationId).subscribe({
      next: (response: void) => {
        console.log(response);
        this.getMissionAffectations();
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

  public onOpenModal2(mission: Mission, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addMissionModal');
    }
    if (mode === 'edit') {
      this.editMission = mission;
      button.setAttribute('data-target', '#updateMissionModal');
    }
    if (mode === 'delete') {
      this.deleteMission = mission;
      button.setAttribute('data-target', '#deleteMissionModal');
    }
    container.appendChild(button);
    button.click();
  }

  public onOpenModal3(missionAffectation: MissionAffectation, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addMissionAffectationModal');
    }
    if (mode === 'edit') {
      this.editMissionAffectation = missionAffectation;
      button.setAttribute('data-target', '#updateMissionAffectationModal');
    }
    if (mode === 'delete') {
      this.deleteMissionAffectation = missionAffectation;
      button.setAttribute('data-target', '#deleteMissionAffectationModal');
    }
    container.appendChild(button);
    button.click();
  }

  public getTravelPrograms(): void {
    this.travelProgramService.getTravelPrograms().subscribe({
      next: (response: TravelProgram[]) => {
        this.travelPrograms = response;
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

  public matching(): void {
    this.travelProgramService.matching().subscribe({
      next: (response: TravelProgram[]) => {
        this.travelPrograms = response;
        console.log(response);
        window.location.reload();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
      complete: () => {
        console.log('complete');
      }
    });
  }

}
