import { Component, OnInit, OnDestroy } from '@angular/core';
import { IngresoEgresoService } from './../../ingreso-egreso/ingreso-egreso.service';
import { AuthService } from './../../auth/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from './../../app.reducer';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit, OnDestroy {

  nombre: string;

  subscription: Subscription = new Subscription();
  constructor( public authService: AuthService,
               public ingresoEgresoService: IngresoEgresoService,
               public store: Store<AppState> ) { }

  ngOnInit() {
    this.store.select('auth')
    .pipe(
      filter( auth => auth.user !== null )
    )
    .subscribe( auth => this.nombre = auth.user.nombre );
  }

  logout() {
    this.authService.logout();
    this.ingresoEgresoService.cancelarSubscriptions();
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
