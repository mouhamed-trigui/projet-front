import { Component, OnInit } from '@angular/core';
import { Rhevaluation } from '../../model/rh-evaluation';
import { RhEvaluationService } from '../../service/rh-evaluation.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-rhevaluation',
  templateUrl: './rhevaluation.component.html',
  styleUrls: ['./rhevaluation.component.scss']
})
export class RhevaluationComponent implements OnInit {
  public download(){
    console.log("yemchii..")
    var data = document.getElementById('contentToConvert');
html2canvas(data).then(canvas => {
// Few necessary setting options
var imgWidth = 208;
var pageHeight = 295;
var imgHeight = canvas.height * imgWidth / canvas.width;
var heightLeft = imgHeight;
 
const contentDataURL = canvas.toDataURL('image/png')
let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
var position = 0;
pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
pdf.save('evaluation.pdf'); // Generated PDF
});
    
  }

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
