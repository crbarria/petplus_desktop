import { Injectable } from '@angular/core';

import { LoginI } from '../models/login.interface';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { usuarioI } from '../models/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  URLusuario: string = "https://api-petplus-duocuc.herokuapp.com/app_usuario/usuario/"

  pruebas: string ="https://api-petplus-duocuc.herokuapp.com/app_usuario/"

  constructor(private http: HttpClient) { }


  loginby(form : Login): Observable<Login>{
    let direccion = this.pruebas + "usuario/"
    return this.http.post<Login>(direccion, form)
  }




  iniciosesion(user  : any): Observable<any>{
    return this.http.post(this.URLusuario, user)
  }



  getuser(nombre :string){
    return this.http.get<usuarioI>(this.URLusuario + nombre)
  }



  
  obetenrusers():Observable<any[]>{
    return this.http.get<any[]>(this.URLusuario);
  }


}
