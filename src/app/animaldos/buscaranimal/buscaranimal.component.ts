import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BuscarService } from '../buscarservice/buscar.service';
import { Animal } from '../models/animal';
import { ConsuProcedimiento } from '../models/consu-procedimiento';

@Component({
  selector: 'app-buscaranimal',
  templateUrl: './buscaranimal.component.html',
  styleUrls: ['./buscaranimal.component.css']
})
export class BuscaranimalComponent implements OnInit {

  public coloreslist: any;

  public duenolist: any;

  public especielist: any;

  public estadolist: any;

  public sexolist: any;

  public horaslist: any;

  public animallist: any;




//Modelo de la creación de consulta procedimiento

public model3: ConsuProcedimiento = {
  id_consulta_procedimiento: 0, observaciones: '', emp_id_emp_id: 0, procedimiento_id_procedimiento_id: 0,
  consulta_reserva_id_consulta_reserva_id: 0, motivo_consulta: '', peso:0, fecha_pro:''
}



  
  constructor(private buscarservice : BuscarService) { }


  
  dtoptions:DataTables.Settings={};
  dtTrigger:Subject<any>=new Subject<any>();

  ngOnInit(): void {


    this.dtoptions={
      pagingType:'simple_numbers'
    };

    this.buscarservice.getcolor().subscribe((nuno: any) => {
      this.coloreslist = nuno.colores;
    })

    this.buscarservice.getduenolist().subscribe((nuno2: any) => {
      this.duenolist = nuno2.dueno
    })

    this.buscarservice.getespecie().subscribe((nuno3: any) => {
      this.especielist = nuno3.especies
    })

    this.buscarservice.getestado().subscribe((nuno4: any) => {
      this.estadolist = nuno4.estados
    })

    this.buscarservice.getsexo().subscribe((nuno5: any) => {
      this.sexolist = nuno5.sexos
    })

    this.color_id_color_id=2

    console.log(this.color_id_color_id)

      //Cargamos los datos de procedimiento

    this.buscarservice.getemp().subscribe((nuno8: any) => {
      this.emplist = nuno8.emps
    })

    this.buscarservice.getprocedimiento().subscribe((nuno9: any) => {
      this.procelist = nuno9.procedimientos
    })

    this.buscarservice.getconreserva().subscribe((nuno10: any) => {
      this.consullist = nuno10.consulta_reserva

    })

    this.buscarservice.getconsuproce().subscribe((nuno11:any)=>{
      this.segundalist = nuno11.consulta_procedimientos

      console.log(this.segundalist)

      this.dtTrigger.next(null);


    })



    //Consulta procedimiento datos

  }

  public dueno:Array<any[]> = []

public buscar_input : string=""
public buscar_input2: string=""
public buscar_input3:string=""

//BUSCADOR DUENO

public nombredueno:string=""
public correodueno:string=""
public telefonodueno:string=""
public ntipo_sangre:string=""



//BUSCADOR DE ANIMAL

public nombreanimal:string=""
public n_microchip:string=""
public duenonombre:number=0

//Buscador de dueno
public iddueno:string=""
public numerodueno:string=""

public nombre_dueno:String=""
public duenotelefono:string=""
public duenocorreo:String=""


//Atributos de color
public color_id_color_id:number=2

cambiarcolor(e: any) {
  console.log(parseFloat(e.target.value))
  this.color_id_color_id = e.target.value

}

public especienombre:number=0
public estadonombre:number=0
public generonombre:number=0



//Obtenemos los id en valor numerico para rellenar la creación de animal


cambiardueno(d: any) {
  console.log(parseFloat(d.target.value))

}


cambiarespecie(es: any) {
  console.log(parseFloat(es.target.value))
}


cambiarestado(esta: any) {
  console.log(parseFloat(esta.target.value))
}



cambiarsexo(sex: any) {
  console.log(parseFloat(sex.target.value))
}





//TESTEO

public buscardueno(){
  this.buscarservice.getundueno(this.buscar_input).subscribe((nuno : any)=>{
    console.log(nuno)

    this.nombredueno = nuno.dueno.nombre_completo
    this.correodueno = nuno.dueno.correo
    this.telefonodueno = nuno.dueno.telefono

  })
}


//FIN DEL TEST


//Buscamos los parametros de especie

public especieid:string=""
public numeroespecie:string=""
public nombre_especie:string=""


//Finaliza la busqueda de especie 

public fechanac:string=""

public buscar(){
  this.buscarservice.getunanimal(this.buscar_input2).subscribe((nuno2:any)=>{
    console.log(nuno2)

    this.nombreanimal = nuno2.animales.nombre
    this.n_microchip = nuno2.animales.n_microchip
    this.duenonombre = nuno2.animales.dueno_id_dueno_id
    this.color_id_color_id = nuno2.animales.color_id_color_id
    this.especienombre = nuno2.animales.especie_id_especie_id
    this.estadonombre = nuno2.animales.estado_id_estado_id
    this.generonombre = nuno2.animales.sexo_id_sexo_id
    this.ntipo_sangre = nuno2.animales.tipo_sangre
    this.fechanac = nuno2.animales.fecha_nac



    //Asignamos el id de dueno

    this.iddueno = nuno2.animales.dueno_id_dueno_id
    this.numerodueno = this.iddueno

    console.log(this.numerodueno)


    //Metodo de buscador de dueño

    this.buscardu()


    //Asignamos el id a especie

    this.especieid = nuno2.animales.especie_id_especie_id

    this.numeroespecie = this.especieid

    //Metodo de buscar especie

    this.buscarespecie()

  })
} 


public buscardu(){
  this.buscarservice.getundueno(this.numerodueno).subscribe((nuno5 : any)=>{
    this.nombre_dueno = nuno5.dueno.nombre_completo
    this.duenotelefono= nuno5.dueno.telefono
    this.duenocorreo= nuno5.dueno.correo
  })
}

public buscarespecie(){
  this.buscarservice.getunaespecie(this.numeroespecie).subscribe((nuno6 : any )=>{
    this.nombre_especie = nuno6.especies.nombre_especie
  })
}


//BUSCADOR DE LA FICHA DEL ANIMAL


public fecha_pro:string=""
public motivo_consulta:string=""
public observacion:string=""
public peso:number=0



public buscadorficha(){
 
  this.buscarservice.getunaficha(this.buscar_input3).subscribe((nuno6 : any)=>{
    console.log(nuno6)
    this.fecha_pro = nuno6.consulta_procedimiento.fecha_pro
    this.motivo_consulta = nuno6.consulta_procedimiento.motivo_consulta
    this.observacion = nuno6.consulta_procedimiento.observaciones
    this.peso = nuno6.consulta_procedimiento.peso
  })

}



























// FIN DEL BUSCADOR FICHA ANIMAL




//Variables de consulta procedimineto


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


public segundalist:any;


//Confirmacion del modelo


onSubmit4() {
  console.log(this.model3)

  this.buscarservice.crearconsultaproce(this.model3).subscribe((resultado: any) => {
    console.log(resultado)

    if (resultado.message="Success"){

      this.confiragregarConsu()

    }
    else{

      alert("Ha ocurrido un error, verifique que los campos esten rellenados")

    }

  })

}


confiragregarConsu(){
  alert("¡Consulta agregado correctamente!");
  location.reload()
}



//Eliminar 

eliminarproce(procedimiento : ConsuProcedimiento){
  this.buscarservice.deleteprocedimiento(procedimiento.id_consulta_procedimiento).subscribe();

  this.confirmarelminar()

}

confirmarelminar(){
alert("¡Consulta eliminada!");
location.reload()
}



//Modelo para actualizar

public model1: Animal = {
  id_animal: 0, nombre: '', n_microchip: '', dueno_id_dueno_id: 0,
  color_id_color_id: 0, especie_id_especie_id: 0, estado_id_estado_id: 0, sexo_id_sexo_id: 0, tipo_sangre:''
}

modificar(){

  console.log(this.model1)

  this.buscarservice.modificaranimal(this.model1)
 
}

onSubmit(){
  console.log(this.model1)
}


}
