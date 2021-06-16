import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: [
  ]
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private router:ActivatedRoute) {
    //añadimos parent para poder recibir todos los parametros que vienen del padre
    this.router.parent.params.subscribe( params => {
      console.log('Ruta hijo');
      console.log(params);
    })
  }

  ngOnInit(): void {
  }

}
