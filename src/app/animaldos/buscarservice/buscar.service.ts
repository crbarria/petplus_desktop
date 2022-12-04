import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../models/animal';
import { Color } from '../models/color';
import { ConsuProcedimiento } from '../models/consu-procedimiento';
import { ConsultaReserva } from '../models/consulta-reserva';
import { Dueno } from '../models/dueno';
import { Emp } from '../models/emp';
import { Especie } from '../models/especie';
import { Estado } from '../models/estado';
import { Procedimiento } from '../models/procedimiento';
import { Sexo } from '../models/sexo';

@Injectable({
  providedIn: 'root'
})
export class BuscarService {

  //Nos conectamos con la información del dueño
  //LOCAL

  // URLdueno: string = "http://127.0.0.1:8000/app_dueno/dueno/"

  // NUBE 
  URLdueno: string = "http://api-petplus-duocuc.herokuapp.com/app_dueno/dueno/";


  //Obetenemos la información del animal

  //LOCAL

  /*
  URLanimal: string = "http://127.0.0.1:8000/app_animal/animal/"
  URLcolor: string = "http://127.0.0.1:8000/app_color/color/";
  URLsexo: string = "http://127.0.0.1:8000/app_sexo/sexo/";
  URLespecie: string = "http://127.0.0.1:8000/app_especie/especie/";
  URLraza: string = "http://127.0.0.1:8000/app_raza/raza/";
  URLestado: string = "http://127.0.0.1:8000/app_estado/estado/";

  */

  //NUBE

  URLanimal: string= "http://api-petplus-duocuc.herokuapp.com/app_animal/animal/";
  URLcolor: string= "http://api-petplus-duocuc.herokuapp.com/app_color/color/";
  URLsexo: string = "http://api-petplus-duocuc.herokuapp.com/app_sexo/sexo/";
  URLespecie:string ="http://api-petplus-duocuc.herokuapp.com/app_especie/especie/";
  URLraza: string = "http://api-petplus-duocuc.herokuapp.com/app_raza/raza/";
  URLestado: string = "http://api-petplus-duocuc.herokuapp.com/app_estado/estado/"


  //Obtenemos la informacion de la consulta y reserva (Horas)

  //LOCAL 

  /*

  URLconsultareserva: string = "http://127.0.0.1:8000/app_consulta_reserva/consulta_reserva/";
  URLreservahoras: string = "http://127.0.0.1:8000/app_reserva/reserva_horas/";

  */

  //NUBE

  URLconsultareserva:string="http://api-petplus-duocuc.herokuapp.com/app_consulta_reserva/consulta_reserva/";
  URLreservahoras:string="http://api-petplus-duocuc.herokuapp.com/app_reserva/reserva_horas/";

  //Obetenemos la informacion del procedimiento

  //LOCAL

  /*
  URLconprocedimiento: string = "http://127.0.0.1:8000/app_consulta_procedimiento/consulta_procedimiento/";
  URLprocedimiento: string = "http://127.0.0.1:8000/app_procedimiento/procedimiento/";
  URLemp: string = "http://127.0.0.1:8000/app_emp/emp/";

  */
  //NUBE

  URLconprocedimiento:string ="http://api-petplus-duocuc.herokuapp.com/app_consulta_procedimiento/consulta_procedimiento/";
  URLprocedimiento:string ="http://api-petplus-duocuc.herokuapp.com/app_procedimiento/procedimiento/";
  URLemp:string = "http://api-petplus-duocuc.herokuapp.com/app_emp/emp/";


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


  getemp(): Observable<Emp[]> {
    return this.http.get<Emp[]>(this.URLemp)
  }

  getprocedimiento(): Observable<Procedimiento[]> {
    return this.http.get<Procedimiento[]>(this.URLprocedimiento)
  }

  getconreserva(): Observable<ConsultaReserva[]> {
    return this.http.get<ConsultaReserva[]>(this.URLconsultareserva)
  }

  getconsuproce():Observable<ConsuProcedimiento[]>{
    return this.http.get<ConsuProcedimiento[]>(this.URLconprocedimiento)
  }



  //Obtener un filtro

  getundueno(nombre : string){
    return this.http.get<Dueno>(this.URLdueno + nombre)
  }

  getunanimal(nombre : string){
    return this.http.get<Animal>(this.URLanimal + nombre)
  }

  getunaficha(nombre :string){
    return this.http.get<ConsuProcedimiento>(this.URLconprocedimiento + nombre)
  }

  getunaespecie(nombre :string){
    return this.http.get<Especie>(this.URLespecie + nombre)
  }




  

  //Metodo POST

  crearconsultaproce(consulta_procedimiento: ConsuProcedimiento): Observable<ConsuProcedimiento> {
    return this.http.post<ConsuProcedimiento>(this.URLconprocedimiento, consulta_procedimiento)
  }


  //Medoto put


  prueba: string = "http://127.0.0.1:8000/app_animal/animal/" 

  public id_animal : string = ''



  modificaranimal(animal : Animal):Observable<Animal>{
    
    return this.http.put<Animal>(this.URLanimal + this.id_animal, animal)
  }

  updateanimal(animal : Animal):Observable<any>{
    return this.http.patch<Animal>(this.URLanimal, animal)
  }

}
