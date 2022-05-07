import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  form: FormGroup;

  constructor(private fb: FormBuilder,  private router: Router) {
    this.form = this.fb.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required],
      }
    )
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  async login(){
    const username = this.form.value.username;
    const password = this.form.value.password;
    
    if(username == 'admin' && password == 'admin'){
      
      this.router.navigate(['user-profile']);
    }

    if (username == 'company' && password == 'company'){
      this.router.navigate(['user']);
    }

    if (username == 'employee' && password == 'employee'){
      this.router.navigate(['employee']);
    }

    this.form.reset();
    
  }


}
