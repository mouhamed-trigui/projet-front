import { Component, OnInit } from '@angular/core';
import { Rhpermission } from '../../model/rh-permission';
import { RhPermissionService } from '../../service/rh-permission.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-rhpermission',
  templateUrl: './rhpermission.component.html',
  styleUrls: ['./rhpermission.component.scss']
})
export class RhpermissionComponent implements OnInit {
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
pdf.save('Permision.pdf'); // Generated PDF
});
    
  }

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
