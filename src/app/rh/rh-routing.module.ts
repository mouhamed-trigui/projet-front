import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RhcongeComponent } from './rhconge/rhconge.component';
import { RhpermissionComponent } from './rhpermission/rhpermission.component';
import { RhevaluationComponent } from './rhevaluation/rhevaluation.component';
import { RhdemanderecComponent } from './rhdemanderec/rhdemanderec.component';

const routes: Routes = [

  {
    path: '',
    data: {
      title: 'RH'
    },
    children: [
      {
        path: '',
        redirectTo: 'rhconge'
      },
      {
        path: 'rhconge',
        component: RhcongeComponent,
        data: {
          title: 'RH Congé'
        }
      },
      {
        path: 'rhpermission',
        component: RhpermissionComponent,
        data: {
          title: 'RH Permission de sortie'
        }
      },
      {
        path: 'rhevaluation',
        component: RhevaluationComponent,
        data: {
          title: 'RH Evaluation Emp'
        }
      }
      ,
      {
        path: 'rhdemanderec',
        component: RhdemanderecComponent,
        data: {
          title: 'RH demanderec'
        }
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RhRoutingModule { }
