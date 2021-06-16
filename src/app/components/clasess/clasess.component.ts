import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clasess',
  templateUrl: './clasess.component.html',
  styles: [
  ]
})
export class ClasessComponent implements OnInit {

  alerta:string = "alert-danger";
  propiedades = {
    danger: false
  }
  loading:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  ejecutar(){
    this.loading = true;
    setTimeout( () => {
      this.loading = false;
    },3000)
  }

}
