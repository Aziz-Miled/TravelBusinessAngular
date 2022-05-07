import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/UserService';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  form: any = {
    username: null,
    firstName:null,
    email: null
  };
  
  id:any;
  
  newPassword: any;
  oldPassword:any;
 
 
  
  currentUser: any;
  email: any;

  constructor(private token: TokenStorageService,private userService: UserService,) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }

  updatePassword(){
    this.UserService.updatePassword(this.email,this.oldPassword,this.newPassword).subscribe( 
       data => {
      this.userService.toastMessage('Password changed successfully');
    }
    ,(error)=>{
      this.userService.toastMessage('Failed action')
     } ); 
    
    }
}

