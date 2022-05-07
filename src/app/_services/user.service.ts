import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invitation } from 'src/models/Invitation';
import { User } from 'src/models/Users';



const API_URL = 'http://localhost:8082/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
 
  usersUrl = 'http://localhost:8082/api/invitations';

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  
  getinvit(): Observable<Invitation[]> {
    return this.http.get<Invitation[]>(this.usersUrl);
  }
  getinvitbyid(idInvit: number): Observable<Invitation[]> {
    return this.http.get<Invitation[]>('http://localhost:8082/api/invitation/' + idInvit) ;
  }
  getusers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8082/api/users');
  }
}
