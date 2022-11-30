import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReservaHoras } from '../models/reserva-horas';
import { TipóHoras } from '../models/tipó-horas';

@Injectable({
  providedIn: 'root'
})
export class HorasService {

  //LOCAL

  /*
  URLreservahoras: string = "http://127.0.0.1:8000/app_reserva/reserva_horas/";
  URLestadohoras: string = "http://127.0.0.1:8000/app_estado_hora/estado_hora/";

  */

  URLTEST: string = "http://127.0.0.1:8000/app_reserva/reserva_horas/100";

  

  //NUBE

  URLreservahoras:string ="http://api-petplus-duocuc.herokuapp.com/app_reserva/reserva_horas/";
  URLestadohoras:string= "http://api-petplus-duocuc.herokuapp.com/app_estado_hora/estado_hora/";


  
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


  //Metodo Put

  modificarhora(horas : ReservaHoras): Observable<ReservaHoras> {

    const URLmodi = this.URLreservahoras 

    return this.http.put<ReservaHoras>(this.URLTEST, horas)
  }

  updatehora(horas : ReservaHoras): Observable<ReservaHoras>{
    return this.http.patch<ReservaHoras>(this.URLTEST, horas)
  }
  

}
