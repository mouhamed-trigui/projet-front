import { Component, OnInit } from '@angular/core';
import { Rhdemanderec } from '../../model/rh-demanderec';
import { RhDemanderecService } from '../../service/rh-demanderec.service';

@Component({
  selector: 'app-rhdemanderec',
  templateUrl: './rhdemanderec.component.html',
  styleUrls: ['./rhdemanderec.component.scss']
})
export class RhdemanderecComponent implements OnInit {

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
