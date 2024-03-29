import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private isLoggedIn = new BehaviorSubject<boolean>(false);
  constructor(
    private http: HttpClient
  ) { }

  toggleLoggedIn(state:boolean):void{
    this.isLoggedIn.next(state);
  }

  register(name:string,email:string,password:string,password_confirmation:string){
    const data = {
      name:name,
      email:email,
      password:password,
      password_confirmation:password_confirmation
    }
    return this.http.post('http://localhost:8000/api/register',data);
  }

  //Forgot password
  forgot(email:string){
    return this.http.post('http://localhost:8000/api/forgot',{
      'email':email
    });
  }

  //Reset password
  resetpassword(token:string,password:string,password_confirmation:string) {
    const data = {
      token:token,
      password:password,
      password_confirmation:password_confirmation
    }
    return this.http.post('http://localhost:8000/api/reset',data);
  }

  login(email:string, password:string){
      return this.http.post('http://localhost:8000/api/login',{
        email:email,
        password:password
      });
  }

  logout(allDevice:boolean){
    const user:any = localStorage.getItem('user');
    const userObj:any = JSON.parse(user); 
    //console.log(userObj);
    const token = userObj.token;
    const headers= new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post('http://localhost:8000/api/logout',{
      allDevice:allDevice
    },{headers:headers});
  }

  //Status of user
  checkLoggedIn(){
    const localData:any = localStorage.getItem('user');
    if(!localData){
      this.isLoggedIn.next(false);
      console.log("User is not logged in !!");
    }
    const userObj = JSON.parse(localData);
    if(userObj){
      const token_expires_at = new Date(userObj.token_expires_at);
      const current_date = new Date();
      if(token_expires_at > current_date){
        this.isLoggedIn.next(true);
      }else{
        this.isLoggedIn.next(false);
        console.log("Token Expired !!");
      }
      
    }else{
      this.isLoggedIn.next(false);
      console.log("Not Logged In !!");
    }
    return this.isLoggedIn.asObservable();
  }

  //User details
  userInfo(){
    const user:any = localStorage.getItem('user');
    const userObj:any = JSON.parse(user); 
    //console.log(userObj);
    const token = userObj.token;
    const headers= new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get('http://localhost:8000/api/user',{
      headers:headers
    });
  }
}
