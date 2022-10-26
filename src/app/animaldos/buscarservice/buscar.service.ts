import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../models/animal';
import { Color } from '../models/color';
import { Dueno } from '../models/dueno';
import { Especie } from '../models/especie';
import { Estado } from '../models/estado';
import { Sexo } from '../models/sexo';

@Injectable({
  providedIn: 'root'
})
export class BuscarService {

   //Nos conectamos con la información dle dueño
   URLdueno: string = "http://127.0.0.1:8000/app_dueno/dueno/"


   //Obetenemos la información del animal
   URLanimal: string = "http://127.0.0.1:8000/app_animal/animal/"
   URLcolor: string = "http://127.0.0.1:8000/app_color/color/";
   URLsexo: string = "http://127.0.0.1:8000/app_sexo/sexo/";
   URLespecie: string = "http://127.0.0.1:8000/app_especie/especie/";
   URLraza: string = "http://127.0.0.1:8000/app_raza/raza/";
   URLestado: string = "http://127.0.0.1:8000/app_estado/estado/";
 
   //Obtenemos la informacion de la consulta y reserva (Horas)
   URLconsultareserva: string = "http://127.0.0.1:8000/app_consulta_reserva/consulta_reserva/";
   URLreservahoras: string = "http://127.0.0.1:8000/app_reserva/reserva_horas/";
 
 
   //Obetenemos la informacion del procedimiento
 
   URLconprocedimiento: string = "http://127.0.0.1:8000/app_consulta_procedimiento/consulta_procedimiento/";
   URLprocedimiento: string = "http://127.0.0.1:8000/app_procedimiento/procedimiento/";
   URLemp: string = "http://127.0.0.1:8000/app_emp/emp/";

  constructor(private http: HttpClient) { }


  //Obtenemos un conjunto de datos

  getduenolist(): Observable<Dueno[]>{
    return this.http.get<Dueno[]>(this.URLdueno);
  }

  getanimal(): Observable<Animal[]>{
    return this.http.get<Animal[]>(this.URLanimal);
  }

  getcolor(): Observable<Color[]> {
    return this.http.get<Color[]>(this.URLcolor);
  }

  getespecie(): Observable<Especie[]> {
    return this.http.get<Especie[]>(this.URLespecie);
  }

  getestado(): Observable<Estado[]> {
    return this.http.get<Estado[]>(this.URLestado);
  }

  getsexo(): Observable<Sexo[]> {
    return this.http.get<Sexo[]>(this.URLsexo);
  }


  //Obtener un filtro

  getundueno(nombre : string){
    return this.http.get<Dueno>(this.URLdueno + nombre)
  }

  getunanimal(nombre : string){
    return this.http.get<Animal>(this.URLanimal + nombre)
  }

}
