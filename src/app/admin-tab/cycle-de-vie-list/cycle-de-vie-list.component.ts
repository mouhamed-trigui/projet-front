import { Component, OnInit } from '@angular/core';
import { ModificationService } from '../../service/modification.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-cycle-de-vie-list',
  templateUrl: './cycle-de-vie-list.component.html',
  styleUrls: ['./cycle-de-vie-list.component.scss']
})
export class CycleDeVieListComponent implements OnInit {

  listModifications: any;

  constructor(private modificationService: ModificationService, private userService: UserService) { }

  ngOnInit() {
    this.modificationService.getAll()
    .subscribe(data => {
      this.listModifications = data;
      this.listModifications.forEach(element => {
        this.userService.getById(element.createdBy)
        .subscribe(res => {
          element.createdBy = res['username'];
        })
        
      });
    });
  }

}
