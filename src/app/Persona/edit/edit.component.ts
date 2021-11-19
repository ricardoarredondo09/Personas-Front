import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Model/Persona';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  persona:Persona;
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.editar();
  }

  editar(){
    let id = Number(localStorage.getItem("id"));
    this.service.getPersonaId(id).subscribe(data => {this.persona = data})

  }

  actualizar(){
    this.service.updatePersona(this.persona).subscribe(data => {
      this.persona = data;
      this.router.navigate(["listar"]);
    })
  }
  
}
