import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit{

  error= {
    email:null
  }
  message:any;
  wait:boolean= false;
  constructor(
    private auth: AuthenticationService,
    private snackBarService: SnackbarService
  )
  {

  }
  ngOnInit(): void {
      
  }

  onSubmit(form:NgForm){
    this.wait = true;
    const email= form.value.email;
    this.auth.forgot(email).subscribe((res:any)=> {
      this.message = res.message;
      // if(res.status == '400'){
      //   this.wait = false;
      //   this.snackBarService.openSnackBar(this.message, "Close", "right", "bottom");
      // }
      this.wait = false;
      this.snackBarService.openSnackBar(this.message, "Close", "right", "bottom");
    },(err)=>{
      this.wait = false;
      //console.log(err.error.errors);
      this.error = err.error.errors;
    });
  }
}
