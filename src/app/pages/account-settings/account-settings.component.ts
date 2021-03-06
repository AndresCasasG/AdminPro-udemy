import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(private _ajustes:SettingsService) { }

  cambiarColor(link:any, tema:string){
    this.aplicarCheck(link);
    this._ajustes.aplicarTema(tema);
  }

  aplicarCheck(link:any){
    let selectores:any = document.getElementsByClassName("selector");
    for (const ref of selectores) {
      ref.classList.remove("working");
    }
    link.classList.add("working");
  }

  colocarCheck(){
    let selectores:any = document.getElementsByClassName("selector");
    let tema = this._ajustes.ajustes.tema;
    for (const ref of selectores) {
      if (ref.getAttribute("data-theme") === tema) {
        ref.classList.add("working");
        break;
      }
    }
  }

  ngOnInit() {
    this.colocarCheck();
  }

}
