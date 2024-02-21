import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit{

  error = {
    password:null
  }
  message:any;
  token:any;
  wait:boolean= false;
  constructor(private route: ActivatedRoute,private auth: AuthenticationService,private snackBarService: SnackbarService){

  }

  ngOnInit(): void {
      this.route.queryParams.subscribe(param => {
        this.token = param['token'];
      });
  }

  onSubmit(form: NgForm){
    this.wait = true;
    const password = form.value.password;
    const password_confirmation = form.value.password_confirmation;
    this.auth.resetpassword(this.token,password,password_confirmation).subscribe((res:any) =>{
      this.wait = false;
      this.message = res.message;
      this.snackBarService.openSnackBar(this.message, "Close", "right", "bottom")
    }, (err)=>{
      this.wait = false;
      this.error = err.error.errors;
      //console.log(err);
    })
  }
}
