import { Component, OnInit } from '@angular/core';
/* 
  Forma de concatenar una variable con una propiedad
  <p [ngStyle]="{'font-size': nombre_variable + 'px'}"> 
  En [style] se pone fontSize y no font-size por convencion asi ya lo sabe leer angular
*/
@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamano">
      Hola mundo esta es una etiqueta
    </p>
    <button class="btn btn-primary mr-5" (click)="tamano = tamano + 5"><i class="fas fa-plus"></i></button>
    <button class="btn btn-danger" (click)="tamano = tamano - 5"><i class="fas fa-minus"></i></button>
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {

  tamano:number = 10;

  constructor() { }

  ngOnInit(): void {
  }

}
