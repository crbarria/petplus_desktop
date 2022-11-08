import { Component, OnInit } from '@angular/core';
import { HorasService } from '../horasservice/horas.service';

@Component({
  selector: 'app-listhoras',
  templateUrl: './listhoras.component.html',
  styleUrls: ['./listhoras.component.css']
})
export class ListhorasComponent implements OnInit {


  //Variables

  public horaslist : Array<any>=[]




  constructor(private servicehoras:HorasService) { }

  ngOnInit(): void {
    this.Listahoras()
  }

  Listahoras(){
    this.servicehoras.gethoras().subscribe((nuno : any)=>{
      console.log(nuno.reserva_horas)
      
      this.horaslist = nuno.reserva_horas

    })

  }

}
