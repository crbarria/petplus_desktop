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

  public horaslist : Array<any>=[]

  public listtipo : Array<any>=[]




  constructor(private servicehoras:HorasService) { }

  ngOnInit(): void {
    this.Listahoras()
    this.Listtipo()
  }

  Listahoras(){
    this.servicehoras.gethoras().subscribe((nuno : any)=>{
      this.horaslist = nuno.reserva_horas
    })
  }

  Listtipo(){
    this.servicehoras.gettipohoras().subscribe((nuno2 :any)=>{
      console.log(nuno2.estados)
      this.listtipo = nuno2.estados
    })
  }

  public hora:string=''
  


  unahora(reserva_horas : ReservaHoras){
    this.servicehoras.getunahora(reserva_horas.id_reserva_horas).subscribe();
    console.log(reserva_horas.id_reserva_horas)

    this.hora = reserva_horas.horas

    console.log(this.hora)
  }

}
