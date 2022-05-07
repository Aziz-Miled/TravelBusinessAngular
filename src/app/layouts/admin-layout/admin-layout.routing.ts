import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { MissionComponent } from 'src/app/pages/missions/missions.component';
import { TravelProgramComponent } from '../../pages/travelprograms/travelprograms.component'

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'users',          component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'missions',       component: MissionComponent},
    { path: 'travelprogram',  component: TravelProgramComponent}
];
