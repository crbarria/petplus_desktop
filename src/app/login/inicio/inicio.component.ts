import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../loginservice/login.service';
import { LoginI } from '../models/login.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private loginservice: LoginService, private router: Router) { }

 

  ngOnInit(): void {



    this.loginservice.obetenrusers().subscribe((nuno2: any) => {
      console.log(nuno2)
    })

  }

 






  //Variables

  public buscar_input:string="";
  public usuario:string="";
  public contrasena:string="";

  buscar(){
    this.loginservice.getuser(this.buscar_input).subscribe((nuno : any)=>{

      console.log(nuno.usuarios)
      console.log(nuno.message)

      if (nuno.message == "Success" && this.usuario == nuno.usuarios.usuario && this.contrasena == nuno.usuarios.contrasena){
        console.log("Kira te amo")

        this.router.navigate(['menu'])
      }
      else{
        alert("Error al intentar iniciar sesión, ingrese un usuario valido")
      }


    })
  }


}
