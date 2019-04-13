import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CycleDeVieListComponent } from './cycle-de-vie-list/cycle-de-vie-list.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Admin'
    },
    children: [
      {
        path: '',
        redirectTo: 'cycle'
      },
      {
        path: 'cycle',
        component: CycleDeVieListComponent,
        data: {
          title: 'Cycle de vie'
        }
      }
      /* {
        path: 'rhpermission',
        component: RhpermissionComponent,
        data: {
          title: 'RH Permission de sortie'
        }
      } */
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminTabRoutingModule { }
