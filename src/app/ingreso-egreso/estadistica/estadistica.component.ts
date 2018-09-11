import { Component, OnInit } from '@angular/core';

import { IngresoEgreso } from './../ingreso-egreso.model';

import { Store } from '@ngrx/store';
// import { AppState } from './../../app.reducer';
import * as fromIngresoEgresoReducer from './../ingreso-egreso.reducer';


import { Subscription } from 'rxjs';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styles: []
})
export class EstadisticaComponent implements OnInit {

  doughnutChartLabels: string[] = [ 'ingresos', 'egresos' ];
  doughnutChartData: number[] = [];


  ingresos: number;
  egresos: number;

  cuantosIngresos: number;
  cuantosEgresos: number;

  subscription: Subscription = new Subscription();

  constructor( private store: Store<fromIngresoEgresoReducer.AppState>) { }

  ngOnInit() {
    this.subscription = this.store.select('ingresoEgreso')
                            .subscribe( ingresoEgreso => {
                              this.contarIngresoEgreso( ingresoEgreso.items );
                            });
  }
  
  contarIngresoEgreso( items: IngresoEgreso[] ) {
    this.ingresos = 0;
    this.egresos = 0;

    this.cuantosIngresos = 0;
    this.cuantosEgresos = 0;

    items.forEach( item => {
      if ( item.tipo === 'ingreso' ) {
        this.cuantosIngresos++;
        this.ingresos += item.monto;
      } else {
        this.cuantosEgresos++;
        this.egresos += item.monto;
      }
    });

    this.doughnutChartData = [ this.ingresos, this.egresos ];
  }

}
