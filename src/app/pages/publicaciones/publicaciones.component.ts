import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-publicaciones',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './publicaciones.component.html',
  styleUrl: './publicaciones.component.css'
})
export class PublicacionesComponent implements OnInit {

  Enviar = {
    name: '',
    apellidos: '',
    email: '',
    body:''
  };

  response: any;
  losdatos:any[] = [];
  datospost: any[] = [];

  constructor (private servicio:DataService){}

  ngOnInit(): void {
      // Promesa
      this.servicio.ObtenerDatos().subscribe((data:any)=>{
        console.log(data);
        this.losdatos = data;
      });
  }

  onSubmit(){
    this.servicio.MetaDatos(this.Enviar).subscribe({
      next: (res) =>{
        console.log('Datos enviados: ', res);
        this.response = res;

        // Añadimos los datosPost a una lista
        this.datospost.push({...this.Enviar});

        // Limpiamos
        this.Enviar = {name: '', apellidos: '', email: '', body: ''};
      },
      error: (err) => {
        console.error('Error al enviar los datos', err);
      }
    });
  }
}
