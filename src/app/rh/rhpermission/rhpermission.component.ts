import { Component, OnInit } from '@angular/core';
import { Rhpermission } from '../../model/rh-permission';
import { RhPermissionService } from '../../service/rh-permission.service';

@Component({
  selector: 'app-rhpermission',
  templateUrl: './rhpermission.component.html',
  styleUrls: ['./rhpermission.component.scss']
})
export class RhpermissionComponent implements OnInit {

  constructor(  private Rservice : RhPermissionService) { }

  ngOnInit() {
    
  }
  RH : Rhpermission = new Rhpermission() ;
  submit(){
    this.Rservice.save(this.RH)
    .subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });

  }

}
