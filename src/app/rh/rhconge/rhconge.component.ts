import { Component, OnInit, ViewChild } from '@angular/core';
import { RhConge } from '../../model/rh-conge';
import { RhCongeService } from '../../service/rh-conge.service';




@Component({
  selector: 'app-rhconge',
  templateUrl: './rhconge.component.html',
  styleUrls: ['./rhconge.component.scss']
})
export class RhcongeComponent implements OnInit {

  constructor(private Rhservice:RhCongeService) { }

  ngOnInit() {
  }
  RHCON:RhConge = new RhConge();
  submit(){
    this.Rhservice.save(this.RHCON)
    .subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });

  }

}
