import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Modification } from '../model/modification';
import { ModificationService } from '../service/modification.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
 

@Component({
  selector: 'app-cycle-vie',
  templateUrl: './cycle-vie.component.html',
  styleUrls: ['./cycle-vie.component.scss']
})
export class CycleVieComponent {
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
pdf.save('MYPdf.pdf'); // Generated PDF
});
    
  }

  modification: Modification = new Modification();

  constructor(private modificationService: ModificationService) { }

  submit(){
    this.modificationService.save(this.modification)
    .subscribe(data => {
      console.log(data);
    })
  }

}
