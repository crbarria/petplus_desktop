import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Procedimiento } from '../models/procedimiento';

@Injectable({
  providedIn: 'root'
})
export class ProcedimientoService {


  URLprocedimiento: string = "http://127.0.0.1:8000/app_procedimiento/procedimiento/";



  constructor(private http: HttpClient) { }

//Metodo Get

  getprocedimiento():Observable<Procedimiento[]>{
    return this.http.get<Procedimiento[]>(this.URLprocedimiento)
  }


//Metodo post

  crearprocedimiento(procedimiento : Procedimiento):Observable<Procedimiento>{
    return this.http.post<Procedimiento>(this.URLprocedimiento, procedimiento)
  }


//Metodo delete

deleteprocedimiento(id_procedimiento:number):Observable<Procedimiento>{
  return this.http.delete<Procedimiento>(this.URLprocedimiento+id_procedimiento)
}
  

}
