import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReservaHoras } from '../models/reserva-horas';

@Injectable({
  providedIn: 'root'
})
export class HorasService {

  URLreservahoras: string = "http://127.0.0.1:8000/app_reserva/reserva_horas/";
  
  constructor(private http: HttpClient) { }


  //Metodo Get

  gethoras(): Observable<ReservaHoras[]>{
    return this.http.get<ReservaHoras[]>(this.URLreservahoras)
  }

  getunahora(id : string){
    return this.http.get<ReservaHoras>(this.URLreservahoras + id)
  }

  

}
