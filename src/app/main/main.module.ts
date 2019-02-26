import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './dashboard/components/search/search.component';
import { UserListComponent } from './dashboard/components/user-list/user-list.component';
import { UserListItemComponent } from './dashboard/components/user-list/user-list-item/user-list-item.component';
import { UserCardComponent } from './dashboard/components/user-card/user-card.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DashboardComponent, SearchComponent, UserListComponent, UserListItemComponent, UserCardComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
