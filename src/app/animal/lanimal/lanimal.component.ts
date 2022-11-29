import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AnimalService } from '../animalservice/animal.service';
import { Animal } from '../models/animal';
import { Color } from '../models/color';
import { ConsuProcedimiento } from '../models/consu-procedimiento';
import { ConsultaReserva } from '../models/consulta-reserva';
import { Dueno } from '../models/dueno';

@Component({
  selector: 'app-lanimal',
  templateUrl: './lanimal.component.html',
  styleUrls: ['./lanimal.component.css']
})
export class LanimalComponent implements OnInit {


  //-------------------TEST---------------------
  public buscar_input: string = ""

  //--------------------FIN TEST-----------------------


  //modelos para agregar

  public model: Dueno = { id_dueno: 0, nombre_completo: '', telefono: '', correo: '' }

  public model1: Animal = {
    id_animal: 0, nombre: '', n_microchip: '', dueno_id_dueno_id: 0,
    color_id_color_id: 0, especie_id_especie_id: 0, estado_id_estado_id: 0, sexo_id_sexo_id: 0, tipo_sangre:''
  }

  public model2: ConsultaReserva = {
    id_consulta_reserva: 0, fecha: '', 
    reserva_horas_id_reserva_horas_id: 0, animal_id_animal_id: 0
  }

  public model3: ConsuProcedimiento = {
    id_consulta_procedimiento: 0, observaciones: '', emp_id_emp_id: 0, procedimiento_id_procedimiento_id: 0,
    consulta_reserva_id_consulta_reserva_id: 0, motivo_consulta:'', peso:0,fecha_pro:''
  }

  //------------------------------------------------------------------------------------


  //Obtenemos los el id en valor numerico

  public color_id_color_id: any;

  public coloreslist: any;

  cambiarcolor(e: any) {
    console.log(parseFloat(e.target.value))
    this.color_id_color_id = e.target.value
  }

  public coloresdrop: Array<any> = []


  //Obtenemos los id en valor numerico para rellenar la creación de animal

  public duenolist: any;

  cambiardueno(d: any) {
    console.log(parseFloat(d.target.value))

  }

  public especielist: any;

  cambiarespecie(es: any) {
    console.log(parseFloat(es.target.value))
  }


  public estadolist: any;
  cambiarestado(esta: any) {
    console.log(parseFloat(esta.target.value))
  }



  public sexolist: any;
  cambiarsexo(sex: any) {
    console.log(parseFloat(sex.target.value))
  }

  // Obtenemos los datos de las horas

  public horaslist: any;

  cambiarhora(hora: any) {
    console.log(parseFloat(hora.target.value))
  }


  //Obtenemos los datos del animal

  public animallist: any;

  cambiaranimal(animaless: any) {
    console.log(parseFloat(animaless.target.value))
  }

  //Obtenemos toda la informacion de los procedimientos y empleados

  public emplist: any;

  cambiaremp(empleados: any) {
    console.log(parseFloat(empleados.target.value))
  }

  public procelist: any;

  public cambiarproce(proce: any) {
    console.log(parseFloat(proce.target.value))
  }

  public consullist: any;

  public cambiarconsulta(consu: any) {
    console.log(parseFloat(consu.target.value))
  }

  //-----------------------------------------------

  constructor(private serviceanimal: AnimalService) { }

  ngOnInit(): void {

    //Cargamos los drop de los animales

    this.serviceanimal.getcolor().subscribe((nuno: any) => {
      this.coloreslist = nuno.colores;
    })

    this.serviceanimal.getduenolist().subscribe((nuno2: any) => {
      this.duenolist = nuno2.dueno
    })

    this.serviceanimal.getespecie().subscribe((nuno3: any) => {
      this.especielist = nuno3.especies
    })

    this.serviceanimal.getestado().subscribe((nuno4: any) => {
      this.estadolist = nuno4.estados
    })

    this.serviceanimal.getsexo().subscribe((nuno5: any) => {
      this.sexolist = nuno5.sexos
    })

    //Cargamos los datos de la consulta_reserva

    this.serviceanimal.gethoras().subscribe((nuno6: any) => {
      this.horaslist = nuno6.reserva_horas

    })

    this.serviceanimal.getanimales().subscribe((nuno7: any) => {
      this.animallist = nuno7.animales
    })




    //Cargamos los datos de procedimiento

    this.serviceanimal.getemp().subscribe((nuno8: any) => {
      this.emplist = nuno8.emps
    })

    this.serviceanimal.getprocedimiento().subscribe((nuno9: any) => {
      this.procelist = nuno9.procedimientos
    })

    this.serviceanimal.getconreserva().subscribe((nuno10: any) => {
      this.consullist = nuno10.consulta_reserva

    })

  }

  //--------------------------TESTEO---------------------------
  public colores() {
    this.serviceanimal.getcolor().subscribe((data: any) => {
      this.coloresdrop = data.colores
      console.log(this.coloresdrop)
    })
  }


  public buscar() {

    this.serviceanimal.getanimal(this.buscar_input).subscribe((data: any) => {
      console.log(data)
    })

  }

  //----------------------------FIN DEL TESTEO--------------------------------


  //Boton que guarda el dueño
  onSubmit() {
    //console.log(this.model)
    this.serviceanimal.creardueno(this.model).subscribe((resultado: Dueno) => {
      console.log(resultado)
      this.confiragregarDu()

    })
  }

  confiragregarDu(){
    alert("¡Dueño agregado!");
    location.reload()
  }


  //Boton que guarda el animal

  onSubmit2() {
    this.serviceanimal.creaanimal(this.model1).subscribe((resultado: Animal) => {
      console.log(resultado)
    })
  this.confiragregarAni()
  }



  confiragregarAni(){
    alert("¡Animal agregado!");
    location.reload()
  }


  //Boton que guarda consulta reserva

  onSubmit3() {
    console.log(this.model2)

    this.serviceanimal.crearconsultare(this.model2).subscribe((resultado: ConsultaReserva) => {
      console.log(resultado)
      this.confiragregarConsu()
    })
    this.confiragregarConsu()
  }

  confiragregarConsu(){
    alert("¡Ficha creada correctamente!");
    location.reload()
  }


 //Boton que guarda el procedimiento

  onSubmit4() {
    console.log(this.model3)

    this.serviceanimal.crearconsultaproce(this.model3).subscribe((resultado: ConsuProcedimiento) => {
      console.log(resultado)
    })

  }


}
