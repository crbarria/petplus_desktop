import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Procedimiento } from '../models/procedimiento';
import { ProcedimientoService } from '../serviceproce/procedimiento.service';

@Component({
  selector: 'app-listproce',
  templateUrl: './listproce.component.html',
  styleUrls: ['./listproce.component.css']
})
export class ListproceComponent implements OnInit {


  //Lista con la informacion de los procedimiento

  public procelist:Array<any>=[]

  public model: Procedimiento={id_procedimiento:0, nombre_procedimiento:'',descripcion:'Descripcion'}

  constructor(private proceservice: ProcedimientoService) { }


  dtoptions:DataTables.Settings={};
  dtTrigger:Subject<any>=new Subject<any>();


  ngOnInit(): void {

    this.dtoptions={
      pagingType:'simple_numbers'
    };


    this.proceservice.getprocedimiento().subscribe((nuno:any)=>{
      console.log(nuno.procedimientos)

      this.procelist = nuno.procedimientos

      this.dtTrigger.next(null);

    })

  }


  onSubmit(){
    console.log(this.model)

    this.proceservice.crearprocedimiento(this.model).subscribe((resultado:Procedimiento)=>{
      console.log(resultado)
      
      this.confiragregar()

    })

  }

  confiragregar(){
    alert("¡Procedimiento agregado!");
    location.reload()
  }


  eliminarproce(procedimiento : Procedimiento){
    this.proceservice.deleteprocedimiento(procedimiento.id_procedimiento).subscribe();

    this.confirmarelminar()

  }

 confirmarelminar(){
  alert("¡Procedimiento eliminado!");
  location.reload()
 }

}
