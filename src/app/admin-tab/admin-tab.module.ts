import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminTabRoutingModule } from './admin-tab-routing.module';
import { CycleDeVieListComponent } from './cycle-de-vie-list/cycle-de-vie-list.component';

@NgModule({
  declarations: [CycleDeVieListComponent],
  imports: [
    CommonModule,
    AdminTabRoutingModule
  ]
})
export class AdminTabModule { }
