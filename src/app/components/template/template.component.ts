import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-template",
  templateUrl: "./template.component.html",
  styles: [
    `
      .ng-invalid.ng-touched:not(form) {
        border: 1px solid red;
      }
    `
  ]
})
export class TemplateComponent implements OnInit {
  usuario: Object = {
    nombre: null,
    apellido: null,
    correo: null
  };

  constructor() {}

  ngOnInit() {}

  guardar(forma: NgForm) {
    console.log("formulario guardado");
    console.log("ngForm: ", forma);
    // console.log(forma.value.apellido);
    console.log("Usuario ", this.usuario);
  }
}
