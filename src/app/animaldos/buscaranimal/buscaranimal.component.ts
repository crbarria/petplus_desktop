import { Component, OnInit } from '@angular/core';
import { BuscarService } from '../buscarservice/buscar.service';

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

  public emplist: any;






  
  constructor(private buscarservice : BuscarService) { }

  ngOnInit(): void {

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


  }

  public dueno:Array<any[]> = []

public buscar_input : string=""
public buscar_input2: string=""

//BUSCADOR DUENO

public nombredueno:string=""
public correodueno:string=""
public telefonodueno:string=""


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




//FIN DEL TEST

public buscardueno(){
  this.buscarservice.getundueno(this.buscar_input).subscribe((nuno : any)=>{
    console.log(nuno)

    this.nombredueno = nuno.dueno.nombre_completo
    this.correodueno = nuno.dueno.correo
    this.telefonodueno = nuno.dueno.telefono

  })
}

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


    //Asignamos el id de dueno

    this.iddueno = nuno2.animales.dueno_id_dueno_id
    this.numerodueno = this.iddueno

    //Metodo de buscador de dueño

    this.buscardu()

  })
} 

public buscardu(){
  this.buscarservice.getundueno(this.numerodueno).subscribe((nuno5 : any)=>{
    this.nombre_dueno = nuno5.dueno.nombre_completo
    this.duenotelefono= nuno5.dueno.telefono
    this.duenocorreo= nuno5.dueno.correo
  })
}





}
