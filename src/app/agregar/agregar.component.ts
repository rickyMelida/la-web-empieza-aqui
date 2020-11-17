import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Usuario {
  nombre: string;
  correo: string;
  password: string;
}

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  formularioCreado: FormGroup;
  usuarios: Array<Usuario> = new Array<Usuario>();

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario() {
    //Aqui creamos las validaciones que va a tener nuestro formulario
    this.formularioCreado = this.formBuilder.group({
      //en el caso del nombre el valor inicial es Carmen, y lo segundo es
      //que es requerido osea campo obligatorio
      nombre: ['Carmen', Validators.required],
      //En el caso del correo su valor inicial va a estar vacio, y va a tener dos
      //validaciones mas, la primera que va a ser requerido y la segunda que va a
      //tener que ser una de tipo email
      correo: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      //En el caso del password el valor inicial va a estar vacio, luego va a ser
      //requerido, y tiene que tener al menos ocho(8) caracteres
      password: ['', Validators.compose([
        Validators.required, Validators.minLength(8)
      ])]
    })
  }

  agregar() {
    this.usuarios.push(this.formularioCreado.value as Usuario);
    //Se borran todos los campos del formulario
    this.formularioCreado.reset();
  }

}
