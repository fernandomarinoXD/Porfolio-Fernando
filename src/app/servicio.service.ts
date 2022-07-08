import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {
uri= 'http://localhost:3000/api';
token: any;



  constructor(private http:HttpClient,private router:Router) { }
  login(email:string,password:string){
  this.http.post(this.uri + '/authenticate',{email:email,password:password})
  .subscribe((resp:any)=> {this.router.navigate(['profile']);
  localStorage.setItem('auth_token',resp.token);
  })

}

logout(){
  localStorage.removeItem('token');
}
public get logIn():boolean{
return (localStorage.getItem('token') !==null);

} 
}
