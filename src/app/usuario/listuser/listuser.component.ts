import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../serviceuser/usuario.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  constructor(private serviceusuario:UsuarioService, private router:Router) { }



  dtoptions:DataTables.Settings={};
  dtTrigger:Subject<any>=new Subject<any>();

  ngOnInit(): void {


    this.dtoptions={
      pagingType:'simple_numbers'
    };

    this.listaremeplados()
    this.listusers()

  }


  retroceder(){
    this.router.navigate(['empleado'])
  }


  public model : Usuario = {id_usuario:0, usuario:'', contrasena:'', emp_id_emp_id:0}




  onSubmit(){
    console.log(this.model)

    this.serviceusuario.crearuser(this.model).subscribe((result : any)=>{

      console.log(result)

      if (result.message == "Success"){


        this.confiragregar()



      }
      
     

    })

  }

  confiragregar(){
    alert("Usuario agregado!");
    location.reload()
  }



//Todo lo relacionado a los empleados
  public emplist : any;


  cambiaremp(empleados: any) {
    console.log(parseFloat(empleados.target.value))
  }

  listaremeplados(){
    this.serviceusuario.getemp().subscribe((nuno : any)=>{
      console.log(nuno.emps)
      this.emplist = nuno.emps
    })
  }
//Fin de la relacion de los empleados


//Todo lo relacionado a los usuarios


public userlist: any;

listusers(){
  this.serviceusuario.getusuario().subscribe((nuno2 : any)=>{
    console.log(this.userlist)
    this.userlist = nuno2.usuarios

    this.dtTrigger.next(null);


  })
}


eliminaruser(usuario : Usuario){
  this.serviceusuario.deleteuser(usuario.id_usuario).subscribe();

  this.confirmarelminar()

}

confirmarelminar(){
  alert("Usuario eliminado!");
  location.reload()
 }



 



//Fin de la relacion de los usuarios

}
