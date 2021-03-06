import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>
    <app-css></app-css>
    <app-clasess></app-clasess>
    <p [appResaltado]="'orange'">
        Hola Mundo
    </p>
    <app-ng-switch></app-ng-switch>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit')
  }
  ngOnChanges(){
    console.log('OnChanges')
  }
  ngDoCheck(){
    console.log('DoCheck')
  }
  ngAfterContentInit(){
    console.log('AfterContentInit')
  }
  ngAfterContentChecked(){
    console.log('AfterContentChecked')
  }
  ngAfterViewInit(){
    console.log('AfterViewInit')
  }
  ngAfterViewChecked(){
    console.log('AfterViewChecked')
  }
  ngOnDestroy(){
    console.log('OnDestroy')
  }

}
