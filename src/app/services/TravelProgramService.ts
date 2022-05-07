import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TravelProgram } from '../interfaces/TravelProgram'
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class TravelProgramService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getTravelPrograms(): Observable<TravelProgram[]> {
    return this.http.get<TravelProgram[]>(`${this.apiServerUrl}/matching/all`);
  }

  public getAllValidatedTravelPrograms(): Observable<TravelProgram[]> {
    return this.http.get<TravelProgram[]>(`${this.apiServerUrl}/matching/validate`);
  }

  
}