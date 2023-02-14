import { Component } from '@angular/core';
import { Heroe, Color } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent {

  esMayusculas: boolean = true;

  ordenarPor: string = 'nombre'

  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Wolverine',
      vuela: false,
      color: Color.amarillo
    },
    {
      nombre: 'Invincible',
      vuela: true,
      color: Color.celeste
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
  ]

  toggleMayusculas () {
    // (this.esMayusculas) ? this.esMayusculas = false : this.esMayusculas = true;
    this.esMayusculas = !this.esMayusculas;
  }

  cambiarOrden(valor: string){
    this.ordenarPor = valor;
  }

}
