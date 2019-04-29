import { Component, OnInit } from '@angular/core';
import { RhCongeService } from '../../service/rh-conge.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-rhconge-list',
  templateUrl: './rhconge-list.component.html',
  styleUrls: ['./rhconge-list.component.scss']
})
export class RhcongeListComponent implements OnInit {
  listrhconge :any ;

  constructor(private Rhservice : RhCongeService , private userservice : UserService ) { }

  ngOnInit() {
    this.Rhservice.getAll()
    .subscribe(data => {
      this.listrhconge = data;
      this.listrhconge.forEach(element => {
        this.userservice.getById(element.createdBy)
        .subscribe(res => {
          element.createdBy = res['name'];
        })
        
      });
    });
    
    }
    
  }


