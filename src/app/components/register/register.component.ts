<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
>>>>>>> 201dc662e71c75e564418310592a2356da650c1d

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
<<<<<<< HEAD
export class RegisterComponent {

=======
export class RegisterComponent implements OnInit {
  errors = {
    name:null,
    email:null,
    password:null
  };
  constructor(private auth:AuthenticationService,private router:Router) {

  }
  
  ngOnInit(): void {

  }
  
  onSubmit(form:NgForm){
    const name = form.value.name;
    const email = form.value.email;
    const password = form.value.password;
    const password_confirmation = form.value.password_confirmation;
    
    this.auth.register(name,email,password,password_confirmation).subscribe((res)=>{
      //console.log(res);
      this.router.navigate(['/login'])
    },(err)=>{
      this.errors = err.error.errors;
      //console.log(err.error.errors);
    })
  }
>>>>>>> 201dc662e71c75e564418310592a2356da650c1d
}
