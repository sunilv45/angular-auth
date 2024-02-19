import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

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
}
