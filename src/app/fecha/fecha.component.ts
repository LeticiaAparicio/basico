import { Component } from '@angular/core';

@Component({
    //Definimos los archivos del componente y dónde se va a renderizar
    selector: 'app-fecha',  //Le damos el valor del nombre del elemento 
                           //donde se va a renderizar el componente //Separamos con comas porque 
                                                                    //es un objeto
    //Le decimos qué archivo HTML le pertenece y lo enlazamos con el TypeScript
    templateUrl: './fecha.component.html',
    //Enlazamos el archivo CSS
    styleUrls: ['./fecha.component.css']
})

export class fechaComponent {
    hoy:object = new Date(); //ponemos la variable
    
}