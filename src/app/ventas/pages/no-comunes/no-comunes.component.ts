import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

interface Sujeto {
  nombre: string;
  genero: string;
  edad: number;
  direccion: string;
}

type genero = 'masculino' | 'femenino' | 'no-binario' | 'monstro'

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  // i18nSelector
  nombre: string = 'Angel';
  genero: genero= 'masculino';

  sujeto1: Sujeto = {
    nombre: 'Angel',
    genero: 'masculino',
    edad: 26,
    direccion: 'Calle Azucenas 187, VMT'
  }
  sujeto2: Sujeto = {
    nombre: 'Gilberto',
    genero: 'no-binario',
    edad: 32,
    direccion: 'Calle Rayo 325, La Molina'
  }
  sujeto3: Sujeto = {
    nombre: 'Roxana',
    genero: 'femenino',
    edad: 28,
    direccion: 'Calle Los Nevados 312, Surco'
  }
  sujeto4: Sujeto = {
    nombre: 'Beto',
    genero: 'mostro',
    edad: 12,
    direccion: 'Calle Universitaria 5123, Pueblo Libre'
  }

  invitacionMapa = {
    'masculino' : 'invitarlo',
    'femenino': 'invitarla',
    'no-binario': 'invitarle',
    'other': 'invitarlx'
  }

  // i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Maggie', 'Justo', 'Muriel']
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos clientes esperando.',
    'other': 'tenemos # clientes esperando',
  }

  cambiarCliente() {
    this.sujeto1.nombre = "Bizcocho";
    this.sujeto1.genero = "no-binario";
  }
  borrarCliente() {
    this.clientes.pop();
  }

  // Async Pipe
  miObservable = interval(1000); // 0,1,2,3,4,5

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa.')
    }, 3500)
  });

}
