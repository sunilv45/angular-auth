import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(
    private http: HttpClient,
    private auth: AuthenticationService
  ){}

  user:any;
  ngOnInit():void{
    this.auth.checkLoggedIn().subscribe((res) =>{
      console.log(res);
    });
    this.auth.userInfo().subscribe((res)=>{
      this.user = res;
      //console.log(res);
    },(err)=>{
      console.log(err);
    });

  }
}
