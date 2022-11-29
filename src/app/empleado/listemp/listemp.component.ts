import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../empleadoservice/empleado.service';
import { Empleado } from '../models/empleado';

@Component({
  selector: 'app-listemp',
  templateUrl: './listemp.component.html',
  styleUrls: ['./listemp.component.css']
})
export class ListempComponent implements OnInit {

  //Variables

  public emplist:Array<any>=[]

  public listtipoemp:Array<any>=[]

  //Opciones y modelo de emplado

  public model : Empleado={id_emp:0,nombre_empleado:'',veterinaria_id_veterinaria_id:1,tipo_empleado_id_tipo_empleado_id:1, tipo_emp:''}

  public cambiartipoemp(tipo: any) {
    console.log(parseFloat(tipo.target.value))
  }

  ///////////////////////////


  public tipo_empleado: Array<any>=['Veterinario(a)','Técnico(a) Veterinario(a)','Secretario(a)','Recepcionista']


  constructor(private empservice: EmpleadoService) { }

  ngOnInit(): void {
    this.listaemp()
    this.listtipo()
  }



  listaemp(){
    this.empservice.getemp().subscribe((nuno : any)=>{

      this.emplist = nuno.emps

      console.log(this.emplist)
    })
  }


  listtipo(){
    this.empservice.getTipoemp().subscribe((nuno2 : any)=>{
    
      this.listtipoemp = nuno2.tipoemps

      console.log(this.listtipoemp)

    })
  }

  eliminaremp(empleado : Empleado){
    this.empservice.deleteemp(empleado.id_emp).subscribe();

    this.confirmarelminar()

  }


  confirmarelminar(){
    alert("Empleado eliminado!");
    location.reload()
   }

  



  onSubmit(){
    console.log(this.model)

    this.empservice.crearemp(this.model).subscribe((resultado:Empleado)=>{
      console.log(resultado)

      this.confiragregar()

    })

  }

  confiragregar(){
    alert("¡Empleado agregado!");
    location.reload()
  }

}
