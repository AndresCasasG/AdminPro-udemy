import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {

    this.subscription = this.RegresarObservable()
      .pipe(
        retry(2)
      )
      .subscribe(
        numero => console.log("Subs", numero),
        error => console.error("Error en el obs", error),
        () => console.log("El observable termino!")
      );

  }

  RegresarObservable(): Observable<any> {


    return new Observable((observer: Subscriber<any>) => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador++;

        const salida = {
          valor: contador
        }

        observer.next(salida);
        // if (contador == 3) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }
        // if (contador == 3) {
        //   clearInterval(intervalo);
        //   observer.error();
        // }
      }, 1000);
    }).pipe(
        map(resp => {
          return resp.valor;
        }),
        filter( (valor, index) => {
          if ( (valor % 2) == 1 ) {
            return true;
          }
          else{
            return false;
          }
        })
      )
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
