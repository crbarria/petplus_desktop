import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReservaHoras } from '../models/reserva-horas';
import { TipóHoras } from '../models/tipó-horas';

@Injectable({
  providedIn: 'root'
})
export class HorasService {

  URLreservahoras: string = "http://127.0.0.1:8000/app_reserva/reserva_horas/";
  URLestadohoras: string = 'http://127.0.0.1:8000/app_estado_hora/estado_hora/';

  
  constructor(private http: HttpClient) { }


  //Metodo Get

  gethoras(): Observable<ReservaHoras[]>{
    return this.http.get<ReservaHoras[]>(this.URLreservahoras)
  }

  getunahora(id_reserva_horas : number){
    return this.http.get<ReservaHoras>(this.URLreservahoras + id_reserva_horas)
  }


  gettipohoras(): Observable<TipóHoras[]>{
    return this.http.get<TipóHoras[]>(this.URLestadohoras)
  }


  

}
