import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validacion',
  templateUrl: './validacion.component.html',
  styleUrls: ['./validacion.component.css']
})
export class ValidacionComponent implements OnInit {


  numero: string;
  constructor() { }

  ngOnInit() {
  }

  calcular() {
      console.log(this.numero);
      let repetidos = [];
      let arregloNum: any = [];
      let contador = 0;

      // validacion de rango entre 14 y 16 digitos
      if (this.numero.length >= 14 && this.numero.length <= 16) {

        // pasar lo del string a un arreglo
        arregloNum = this.numero.split('');
        // pasar el total del arreglo del string
        let total_numeros = arregloNum.length;

        // reealizar la iteracion del arreeglo con dos for 
        // para tener dos arreglos donde se pueda realizar la comparacion
        // y la suma cuando estos coincidan.
        for (let i = 0; i < total_numeros; i++) {
          for (let j = 0; j < total_numeros; j++) {
            if (arregloNum[i] === arregloNum[j]) {
              contador++;
            }
          }
          //  si hay numeros repetidos en el arreglo entonces see procede hacer
          //  la suma y las veces que se repiten y solo se muestren los datos reepeetidos en un solo arreeglo
          if (contador > 1 && repetidos.indexOf(arregloNum[i]) === -1) {
            repetidos.push(arregloNum[i]);
            console.log('el numero ' + arregloNum[i] + ' se repite ' + contador + ' veces');
          }
          contador = 0;
        }
        return;
      } else {
        alert('no esta dentro del rango (14 y 16) giitos :( ');
        return;
      }
  }

}
