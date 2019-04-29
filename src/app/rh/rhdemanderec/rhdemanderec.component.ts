import { Component, OnInit } from '@angular/core';
import { Rhdemanderec } from '../../model/rh-demanderec';
import { RhDemanderecService } from '../../service/rh-demanderec.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-rhdemanderec',
  templateUrl: './rhdemanderec.component.html',
  styleUrls: ['./rhdemanderec.component.scss']
})
export class RhdemanderecComponent implements OnInit {

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
pdf.save('recrutement.pdf'); // Generated PDF
});
    
  }

  constructor(private RHS:RhDemanderecService) { }

  ngOnInit() {
  }
  RHdem:Rhdemanderec = new Rhdemanderec();
  submit(){
    this.RHS.save(this.RHdem)
    .subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });
  }

}
