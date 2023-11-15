import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { WorkTableListComponent } from 'app/work-table-list/work-table-list.component';
import { UserTableListComponent } from 'app/user-table-list/user-table-list.component';
import { WorkProfileComponent } from 'app/work-profile/work-profile.component';
import { MateralProfileComponent } from 'app/materal-profile/materal-profile.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'work-profile', component: WorkProfileComponent },
    { path: 'materal-profile', component: MateralProfileComponent },
    { path: 'work-table-list', component: WorkTableListComponent },
    { path: 'user-table-list', component: UserTableListComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'upgrade', component: UpgradeComponent },
    // {
    //     path: 'user-profile',
    //     children: [{
    //         path: 'icons',
    //         component: IconsComponent
    //     }]
    // }
];
