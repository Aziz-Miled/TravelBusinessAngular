import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import {UserService} from './services/UserService';
import {TravelProgramService} from './services/TravelProgramService';
import {MissionService} from './services/MissionService';
import {MissionAffectationService} from './services/MissionAffectationService';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { UsereLayoutComponent } from './layouts/usere-layout/usere-layout.component';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    UserLayoutComponent,
    UsereLayoutComponent
  ],
  providers: [
    UserService,
    TravelProgramService,
    MissionService,
    MissionAffectationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
