import { Component } from '@angular/core';
<<<<<<< HEAD
=======
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
>>>>>>> 201dc662e71c75e564418310592a2356da650c1d

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

<<<<<<< HEAD
=======
  checkbox:boolean = false;
  constructor(
    private auth: AuthenticationService,
    private router: Router
  ){

  }
  ngOnInit():void{

  }

  logout(){
    this.auth.logout(this.checkbox).subscribe((res)=>{
      //console.log(res);
      localStorage.removeItem('user');
      this.auth.toggleLoggedIn(false);
      //Redirect to login page
      this.router.navigate(['/']);
    },(err)=>{
      console.log(err);
    })
  }
>>>>>>> 201dc662e71c75e564418310592a2356da650c1d
}
