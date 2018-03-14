import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

//Importamos nuestro componente nuevo con el nombre con el que lo hemos puesto para exportar
// Lo exportamos con fechaComponent pues lo importo con ese mismo nombre
import { fechaComponent } from './fecha/fecha.component';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { MonoarchivoComponent } from './monoarchivo/monoarchivo.component';

@NgModule({
  declarations: [
    AppComponent,
    //Ponemos el componente que hemos importado arriba dentro de este array
    fechaComponent,
    ImagenesComponent,
    MonoarchivoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
