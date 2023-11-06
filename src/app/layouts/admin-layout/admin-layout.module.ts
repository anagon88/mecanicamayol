import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { WorkTableListComponent } from 'app/work-table-list/work-table-list.component';
import { ComponentsModule } from 'app/components/components.module';
import { UserTableListComponent } from 'app/user-table-list/user-table-list.component';
import { WorkProfileComponent } from 'app/work-profile/work-profile.component';
//import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

//import { FlatpickrModule } from 'angularx-flatpickr';
//import { CalendarModule, DateAdapter } from 'angular-calendar';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    ComponentsModule,
    //FlatpickrModule.forRoot(),
    //CalendarModule
    // .forRoot({
    //   provide: DateAdapter,
    //   useFactory: adapterFactory,
    // }),
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    WorkTableListComponent,
    WorkProfileComponent,
    UserTableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    WorkProfileComponent
  ],
  providers: [CurrencyPipe]
})

export class AdminLayoutModule {}
