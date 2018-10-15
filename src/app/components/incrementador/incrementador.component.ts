import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @ViewChild("txtProgress") txtProgress:ElementRef;
  @Input() leyenda:string = "Leyenda";
  @Input() porcentaje:number = 50;

  @Output() CambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  cambiarValor(valor:number){
    if (this.porcentaje < 100 && valor > 0) {
      this.porcentaje += valor;
    }
    if (this.porcentaje > 0 && valor < 0) {
      this.porcentaje += valor;
    }
    this.CambioValor.emit(this.porcentaje);
  }

  onChange(event){

    if (event == null) {
      this.porcentaje = 0;
    }
    else if (event > 100) {
      this.porcentaje = 100;
    }
    else if (event < 0) {
      this.porcentaje = 0;
    }
    else {
      this.porcentaje = event;
    }
    console.log(event);
    console.log(this.porcentaje);

    this.txtProgress.nativeElement.value = this.porcentaje;
    this.CambioValor.emit(this.porcentaje);
  }

  ngOnInit() {
  }

}
