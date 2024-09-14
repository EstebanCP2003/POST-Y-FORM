import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  nombre : string = "Juana";

  cliente = {
    id: 0,
    nombre: "",
    telefono: 0,
  }

  // Será un arreglo de tipo any
  clientes: any[] = [];
  editando: boolean = false;
  indiceEditar: number = -1;

  cambiarNombre (){
    // console.log(this.nombre);
    console.log('La variable cliente ahora tiene:' + this.cliente.nombre); // Se imprime todo los valores del arreglo
    //console.log(this.cliente.nombre); // Se imprime el valor especifico del arreglo
  }

  AgregarCliente(){
    // this.cliente.id = 0;
    // this.cliente.nombre = '';
    // this.cliente.telefono = 0;
    if (this.editando) {
      // Actualiza los datos del cliente en la lista
      this.clientes[this.indiceEditar] = { ...this.cliente };
      this.editando = false;
      this.indiceEditar = -1;
    }

    else{
      this.clientes.push({...this.cliente});
      console.log(this.clientes);
    }
    
     // Resetea el objeto 'cliente' para limpiar los campos del formulario
     this.cliente = { id: 0, nombre: "", telefono: 0 }; // Asegúrate de limpiar los campos aquí
     console.log(this.clientes);
  }

  eliminarCliente(index: number) {
    this.clientes.splice(index, 1);
  }

  editarCliente(index: number) {
    this.cliente = { ...this.clientes[index] };
    this.editando = true;
    this.indiceEditar = index;
  }

  VerDatosCliente(){
    return this.clientes.length < 1; 
  }
}
