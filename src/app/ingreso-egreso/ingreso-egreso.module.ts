import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Módulos personalizados

import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './../dashboard/dashboard-routing.module';

// NGRX

import { StoreModule } from '@ngrx/store';
import { ingresoEgresoReducer } from './ingreso-egreso.reducer';

// Gráficas

import { ChartsModule } from 'ng2-charts';

// Componentes

import { OrdenIngresoEgresoPipe } from './orden-ingreso-egreso.pipe';
import { EstadisticaComponent } from './estadistica/estadistica.component';
import { DetalleComponent } from './detalle/detalle.component';
import { IngresoEgresoComponent } from './ingreso-egreso.component';
import { DashboardComponent } from './../dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChartsModule,
    SharedModule,
    DashboardRoutingModule,
    StoreModule.forFeature( 'ingresoEgreso', ingresoEgresoReducer )
  ],
  declarations: [
    DashboardComponent,
    IngresoEgresoComponent,
    DetalleComponent,
    EstadisticaComponent,
    OrdenIngresoEgresoPipe
  ],
  exports: [
    DashboardComponent
  ]
})
export class IngresoEgresoModule { }
