import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IngresoEgreso } from './ingreso-egreso.model';
import { IngresoEgresoService } from './ingreso-egreso.service';

import { Store } from '@ngrx/store';
import { AppState } from './../app.reducer';
import { ActivarLoadingAction, DesactivarLoadingAction } from './../shared/ui.actions';

import * as fromIngresoEgresoState from './ingreso-egreso.reducer';

import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ingreso-egreso',
  templateUrl: './ingreso-egreso.component.html',
  styles: []
})
export class IngresoEgresoComponent implements OnInit, OnDestroy {
  
  forma: FormGroup;
  tipo = 'ingreso';
  loadingSubscription: Subscription = new Subscription();
  cargando: boolean;

  constructor( public ingresoEgresoService: IngresoEgresoService,
               private store: Store<fromIngresoEgresoState.AppState> ) { }

  ngOnInit() {

    this.loadingSubscription = this.store.select('ui')
        .subscribe( ui => this.cargando = ui.isLoading );
    this.forma = new FormGroup( {
      'descripcion': new FormControl( '', Validators.required ),
      'monto': new FormControl( 0, Validators.min(0))
    });


  }

  crearIngresoEgreso() {
    
    this.store.dispatch( new ActivarLoadingAction() );

    const ingresoEgreso = new IngresoEgreso({ ...this.forma.value, tipo: this.tipo  });
    this.ingresoEgresoService.crearIngresoEgreso( ingresoEgreso )
        .then( () => {
          this.store.dispatch( new DesactivarLoadingAction() );
          Swal( 'Transacción realizada con éxito', ingresoEgreso.descripcion, 'success' );
          this.forma.reset({ monto: 0 });
        })
        .catch( err => {
          this.store.dispatch( new DesactivarLoadingAction() );
          Swal( 'Transacción fallida', err, 'error' );
        });


  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }
}
