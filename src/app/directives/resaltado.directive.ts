import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {
  //Declaración de variable nuevoColor la cual viene de afuera es decir cuando se use la directiva appResaltado
  @Input('appResaltado') nuevoColor:string;

  //mouseEntro es el alias
  @HostListener('mouseenter') mouseEntro(){
    this.resaltar( this.nuevoColor || 'yellow');
  }

  @HostListener('mouseleave') mouseSalio(){
    /* this.el.nativeElement.style.backgroundColor = null; */
    this.resaltar(null);
  }
  
  constructor(private el:ElementRef){
    console.log('Directiva llamada')
  }

  private resaltar (color:string){
    this.el.nativeElement.style.backgroundColor = color;
  }
}
