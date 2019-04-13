import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../model/user';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {
  user: User = new User();

  constructor(private userService: UserService) { }

  submit(){

    this.userService.register(this.user)
            .pipe(first())
            .subscribe(
                data => {
                    /* <this.router.navigate(['/login']);> */
                },
                error => {
                    console.log(error);
                });
  }

  ngOnInit(){}

}
