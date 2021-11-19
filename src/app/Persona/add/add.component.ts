import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Model/Persona';
import { ServiceService } from 'src/app/Service/service.service';
import  Swal  from "sweetalert2";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }
  persona:Persona=new Persona();

  guardar(){
    this.service.crearPersona(this.persona)
    .subscribe(data => {
      Swal.fire('Nueva Persona', 'Persona '+this.persona.nombres+' '+this.persona.apellidos + ' Creada con Exito', 'success')
      this.router.navigate(['listar']);
    }, err=> { Swal.fire('Error', 'Complete los datos marcados en rojo', 'error')})
  }


  purbea(){
    Swal.fire('a', 'a', 'error')
  }
}
