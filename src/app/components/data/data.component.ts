import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-data",
  templateUrl: "./data.component.html",
  styles: []
})
export class DataComponent {
  forma: FormGroup;

  usuario: any = {
    nombrecompleto: {
      nombre: "Fernando",
      apellido: "Herrera"
    },
    correo: "renzo@hotmail.com"
  };

  constructor() {
    console.log(this.usuario);

    this.forma = new FormGroup({
      nombrecompleto: new FormGroup({
        nombre: new FormControl("", [
          Validators.required,
          Validators.minLength(4)
        ]),
        apellido: new FormControl("", Validators.required)
      }),

      correo: new FormControl("", [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")
      ])
    });

    this.forma.setValue(this.usuario);
  }

  guardarCambios() {
    this.forma.reset({
      nombrecompleto:{
        nombre: "",
        apellido: ""
      },

      correo: ""
    })
    console.log(this.forma);
  }
}
