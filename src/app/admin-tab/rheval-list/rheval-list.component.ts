import { Component, OnInit } from '@angular/core';
import { RhEvaluationService } from '../../service/rh-evaluation.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-rheval-list',
  templateUrl: './rheval-list.component.html',
  styleUrls: ['./rheval-list.component.scss']
})
export class RhevalListComponent implements OnInit {
  listeval:any ;
  constructor(private evalservice:RhEvaluationService,private userservice:UserService ) { }

  ngOnInit() {
    this.evalservice.getAll().subscribe(data=>{
      this.listeval=data;
      this.listeval.forEach(element => {
        this.userservice.getById(element.createdBy)
        .subscribe(res => {
          element.createdBy = res['username'];
        })
        
      });
    });
  }

}
