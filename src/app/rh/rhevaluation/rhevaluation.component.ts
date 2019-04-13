import { Component, OnInit } from '@angular/core';
import { Rhevaluation } from '../../model/rh-evaluation';
import { RhEvaluationService } from '../../service/rh-evaluation.service';

@Component({
  selector: 'app-rhevaluation',
  templateUrl: './rhevaluation.component.html',
  styleUrls: ['./rhevaluation.component.scss']
})
export class RhevaluationComponent implements OnInit {

  constructor(private RHE:RhEvaluationService) { }
 
  ngOnInit() {
  }
  RHeval:Rhevaluation = new Rhevaluation();
  submit(){
    this.RHE.save(this.RHeval)
    .subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });

  }

}
