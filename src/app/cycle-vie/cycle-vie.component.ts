import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Modification } from '../model/modification';
import { ModificationService } from '../service/modification.service';
 

@Component({
  selector: 'app-cycle-vie',
  templateUrl: './cycle-vie.component.html',
  styleUrls: ['./cycle-vie.component.scss']
})
export class CycleVieComponent {
  public download(){
    console.log("yemchii..")
    
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
