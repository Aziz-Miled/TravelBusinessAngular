import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mission } from '../interfaces/Mission'
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class MissionService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>(`${this.apiServerUrl}/mission/all`);
  }

  public addMission(mission: Mission): Observable<Mission> {
    return this.http.post<Mission>(`${this.apiServerUrl}/mission/add`, mission);
  }

  public updateMission(mission: Mission): Observable<Mission> {
    return this.http.put<Mission>(`${this.apiServerUrl}/mission/update`, mission);
  }

  public deleteMission(missionId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/mission/delete/${missionId}`);
  }
}