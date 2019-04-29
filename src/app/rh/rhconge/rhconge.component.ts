import { Component, OnInit, ViewChild } from '@angular/core';
import { RhConge } from '../../model/rh-conge';
import { RhCongeService } from '../../service/rh-conge.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';




@Component({
  selector: 'app-rhconge',
  templateUrl: './rhconge.component.html',
  styleUrls: ['./rhconge.component.scss']
})

export class RhcongeComponent implements OnInit {
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
pdf.save('Congé.pdf'); // Generated PDF
});
    
  }

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
