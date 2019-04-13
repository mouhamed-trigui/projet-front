import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RhRoutingModule } from './rh-routing.module';
import { RhcongeComponent } from './rhconge/rhconge.component';
import { FormsModule } from '@angular/forms';
import { RhCongeService } from '../service/rh-conge.service';
import { RhpermissionComponent } from './rhpermission/rhpermission.component';
import { RhPermissionService } from '../service/rh-permission.service';
import { RhevaluationComponent } from './rhevaluation/rhevaluation.component';
import { RhEvaluationService } from '../service/rh-evaluation.service';
import { RhDemanderecService } from '../service/rh-demanderec.service';
import { RhdemanderecComponent } from './rhdemanderec/rhdemanderec.component';

@NgModule({
  declarations: [RhcongeComponent, RhpermissionComponent, RhevaluationComponent,RhdemanderecComponent],
  imports: [
    CommonModule,
    RhRoutingModule,
    FormsModule
  ],
  providers:[
    RhCongeService,
    RhPermissionService,
    RhEvaluationService,
    RhDemanderecService
  ]
})
export class RhModule { }
