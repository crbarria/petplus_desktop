import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

URLempleado:string = "http://127.0.0.1:8000/app_emp/emp/"
URLtipoemp:string = "http://127.0.0.1:8000/app_tipo_empleado/tipo_emp/"

  constructor(private http: HttpClient) { }



//Metodo Get
getemp():Observable<Empleado[]>{
  return this.http.get<Empleado[]>(this.URLempleado)
}

getTipoemp():Observable<Empleado[]>{
  return this.http.get<Empleado[]>(this.URLtipoemp)
}


//Metodo post

crearemp(emp:Empleado):Observable<Empleado>{
  return this.http.post<Empleado>(this.URLempleado, emp)
}

//Metodo delete

deleteemp(id_emp:number): Observable<Empleado>{
  return this.http.delete<Empleado>(this.URLempleado+id_emp)
}



}
