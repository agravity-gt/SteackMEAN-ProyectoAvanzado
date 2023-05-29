import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponenteComponent } from './pages/carrito-compras/prueba-componente/prueba-componente.component';
import { componentesGenericos } from 'shared/components/shared-generico.module';
import { HttpClientModule } from '@angular/common/http';
import {serviciosGenericos} from '../../../../shared/services/services-providers.generico';
import { CatalogoComponent } from './pages/catalogo/catalogo.component'


@NgModule({
  declarations: [
    AppComponent,
    PruebaComponenteComponent,
    CatalogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    componentesGenericos,
    HttpClientModule
  ],
  providers: [serviciosGenericos],
  bootstrap: [AppComponent]
})
export class AppModule { }
