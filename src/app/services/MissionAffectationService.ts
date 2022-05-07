import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MissionAffectation } from '../interfaces/MissionAffectation'
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class MissionAffectationService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getMissionAffectations(): Observable<MissionAffectation[]> {
    return this.http.get<MissionAffectation[]>(`${this.apiServerUrl}/missionAffectation/all`);
  }

  public addMission(missionAffectation: MissionAffectation): Observable<MissionAffectation> {
    return this.http.post<MissionAffectation>(`${this.apiServerUrl}/missionAffectation/add`, missionAffectation);
  }

  public updateMission(missionAffectation   : MissionAffectation): Observable<MissionAffectation> {
    return this.http.put<MissionAffectation>(`${this.apiServerUrl}/missionAffectation/update`, missionAffectation);
  }

  public deleteMission(missionAffectationId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/missionAffectation/delete/${missionAffectationId}`);
  }

}