import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Model/Persona';
import {ServiceService} from '../../Service/service.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  personas:Persona[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getPersonas().subscribe(data=>{this.personas = data})
  }

  editar(persona:Persona){
    localStorage.setItem("id", persona.id.toString());
    this.router.navigate(["edit"]);
  }
  
  delete(persona:Persona){

    Swal.fire({
      title: '¿Estas seguro de eliminar la siguiente persona?',
      text: persona.nombres+ " " + persona.apellidos,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar',
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deletePersona(persona).subscribe(data => {this.personas = this.personas.filter(p=> p!=persona, Swal.fire('Persona Eliminada', 'Persona '+persona.nombres+' '+persona.apellidos + ' Eliminada con Exito', 'success'));})
      }
    })
   
  }
}
