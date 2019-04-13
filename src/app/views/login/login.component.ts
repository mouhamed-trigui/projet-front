import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { AuthenticationService } from '../../service/authentification.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  user :User = new User();
  constructor(private authentificationService: AuthenticationService, private router: Router){}

  submit(){
    this.authentificationService.login(this.user.usernameOrEmail, this.user.password)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate(['/dashboard']);
                },
                error => {
                    console.log(error);
                });

  }

  ngOnInit(){

  }
 }
