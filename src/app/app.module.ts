import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { PieComponent } from './pie/pie.component';
import { InicioSeccionComponent } from './inicio-seccion/inicio-seccion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { PorfolioComponent } from './porfolio/porfolio.component';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CuerpoComponent,
    EstudiosComponent,
    PieComponent,
    InicioSeccionComponent,
    PorfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
