import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminTabRoutingModule } from './admin-tab-routing.module';
import { CycleDeVieListComponent } from './cycle-de-vie-list/cycle-de-vie-list.component';
import { RhcongeListComponent } from './rhconge-list/rhconge-list.component';
import { RhdemanderecListComponent } from './rhdemanderec-list/rhdemanderec-list.component';
import { RhevalListComponent } from './rheval-list/rheval-list.component';

@NgModule({
  declarations: [CycleDeVieListComponent, RhcongeListComponent, RhdemanderecListComponent, RhevalListComponent],
  imports: [
    CommonModule,
    AdminTabRoutingModule
  ]
})
export class AdminTabModule { }
