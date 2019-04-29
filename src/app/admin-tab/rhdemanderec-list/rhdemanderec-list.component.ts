import { Component, OnInit } from '@angular/core';
import { RhDemanderecService } from '../../service/rh-demanderec.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-rhdemanderec-list',
  templateUrl: './rhdemanderec-list.component.html',
  styleUrls: ['./rhdemanderec-list.component.scss']
})
export class RhdemanderecListComponent implements OnInit {
  
listdemanderec : any;
  
 

  constructor(private recService :RhDemanderecService, private userservice : UserService) { }

  ngOnInit() {
    this.recService.getAll() 
    .subscribe(data => {
      this.listdemanderec = data;
      this.listdemanderec.forEach(element => {
        this.userservice.getById(element.createdBy)
        .subscribe(res => {
          element.createdBy = res['username'];
         
        })
        
      });
      console.log(data) ;
    });
    
  }

}
