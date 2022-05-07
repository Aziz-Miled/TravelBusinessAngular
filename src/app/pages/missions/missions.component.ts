import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
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

  

}
