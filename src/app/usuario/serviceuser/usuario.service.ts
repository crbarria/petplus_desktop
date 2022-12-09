import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from 'src/app/empleado/models/empleado';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  URLusuario: string = "https://api-petplus-duocuc.herokuapp.com/app_usuario/usuario/"

  URLempleado:string = "https://api-petplus-duocuc.herokuapp.com/app_emp/emp/"




  constructor(private http:HttpClient) { }



  //Obtenemos las listas

  getemp():Observable<Empleado[]>{
    return this.http.get<Empleado[]>(this.URLempleado)
  }

  getusuario():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.URLusuario)
  }


//Metodo post

crearuser(users:Usuario):Observable<Usuario>{
  return this.http.post<Usuario>(this.URLusuario, users)
}


//Metodo delete

deleteuser(id_usuario:number): Observable<Usuario>{
  return this.http.delete<Usuario>(this.URLusuario+id_usuario)
}


}
