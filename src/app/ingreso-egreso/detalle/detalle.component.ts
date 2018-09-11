import { IngresoEgresoService } from './../ingreso-egreso.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../../app.reducer';
import { IngresoEgreso } from '../ingreso-egreso.model';
import { Subscription } from 'rxjs';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: []
})
export class DetalleComponent implements OnInit, OnDestroy {

  items: IngresoEgreso[];
  subscription: Subscription = new Subscription();

  constructor( private store: Store<AppState>,
               public ingresoEgresoService: IngresoEgresoService ) { }

  ngOnInit() {
    this.subscription = this.store.select('ingresoEgreso')
        .subscribe( ingresoEgreso => {
          // console.log( ingresoEgreso.items )
          this.items = ingresoEgreso.items;
        });
  }

  borrarItem( item: IngresoEgreso ) {
    this.ingresoEgresoService.borrarIngresoEgreso( item.uid )
        .then( () => {
          Swal( 'Eliminado', item.descripcion, 'success' );
        } );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
