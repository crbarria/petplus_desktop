import { Component, OnInit } from '@angular/core';
import { HorasService } from '../horasservice/horas.service';
import { ReservaHoras } from '../models/reserva-horas';

@Component({
  selector: 'app-listhoras',
  templateUrl: './listhoras.component.html',
  styleUrls: ['./listhoras.component.css']
})
export class ListhorasComponent implements OnInit {


  //Variables

 

  public listtipo : Array<any>=[]




  constructor(private servicehoras:HorasService) { }

  ngOnInit(): void {
    this.Listahoras()
    this.Listtipo()

  }




  public horaslist : Array<any>=[]



  Listahoras(){
    this.servicehoras.gethoras().subscribe((nuno : any)=>{
      this.horaslist = nuno.reserva_horas

      console.log(nuno)


    })
  }



  public estado_horas: Array<any>=['Disponible','Cancelada','No disponible']


  Listtipo(){
    this.servicehoras.gettipohoras().subscribe((nuno2 :any)=>{
      console.log(nuno2.estados)
      
    })
  }

  public hora:string=''

  public estado:string=''
  


  unahora(reserva_horas : ReservaHoras){
    this.servicehoras.getunahora(reserva_horas.id_reserva_horas).subscribe();
    console.log(reserva_horas.id_reserva_horas)

    this.hora = reserva_horas.horas

    console.log(this.hora)
  }


  modificarhora(reserva_horas :  ReservaHoras){
    this.servicehoras.modificarhora(reserva_horas).subscribe();
    console.log("Update completo")
  }

}
