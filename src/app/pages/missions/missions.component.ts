import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Mission } from 'src/app/interfaces/Mission';
import { MissionService } from 'src/app/services/MissionService';
import { MissionAffectation } from 'src/app/interfaces/MissionAffectation';
import { MissionAffectationService } from 'src/app/services/MissionAffectationService';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.scss']
})
export class MissionComponent implements OnInit {

  public missions: Mission[];
  public editMission: Mission;
  public deleteMission: Mission;

  public missionAffectation: MissionAffectation
  public missionAffectations: MissionAffectation[];
  public editMissionAffectation: MissionAffectation;
  public deleteMissionAffectation: MissionAffectation;

  constructor(private missionService: MissionService, private missionAffectationService: MissionAffectationService) { }


  ngOnInit() {
    this.getMissions();
    this.getMissionAffectations();
  }

  public getMissions(): void {
    this.missionService.getMissions().subscribe({
      next: (response: Mission[]) => {
        this.missions = response;
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

  public onAddMission(addForm: NgForm): void {
    document.getElementById('add-mission-form').click();
    this.missionService.addMission(addForm.value).subscribe({
      next: (response: Mission) => {
        console.log(response);
        this.getMissions();
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
        this.getMissions();
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
        this.getMissions();
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

  public onOpenModal1(mission: Mission, mode: string): void {
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

  public onOpenModal2(missionAffectation: MissionAffectation, mode: string): void {
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

}
