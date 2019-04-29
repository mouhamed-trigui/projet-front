import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CycleDeVieListComponent } from './cycle-de-vie-list/cycle-de-vie-list.component';
import { RhcongeListComponent } from './rhconge-list/rhconge-list.component';
import { RhdemanderecListComponent } from './rhdemanderec-list/rhdemanderec-list.component';
import { RhevalListComponent } from './rheval-list/rheval-list.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Admin'
    },
    children: [
      {
        path: '',
        redirectTo: 'rhcongelist'
      },
      {
        path: 'Rhdemlist',
        component: RhdemanderecListComponent,
        data: {
          title: 'Demande Rect'
        }
      },
       {
        path: 'rhcongelist',
        component: RhcongeListComponent,
        data: {
          title: 'List Conge'
        }
      } 
      ,
       {
        path: 'rheval',
        component: RhevalListComponent,
        data: {
          title: 'List Evaluation'
        }
      } 
      
      ,
       {
        path: 'cycle',
        component: CycleDeVieListComponent,
        data: {
          title: 'List cycle de vie'
        }
      } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminTabRoutingModule { }
