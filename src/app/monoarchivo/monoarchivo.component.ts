import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monoarchivo',
  template: `<div class="contenedor">
                  <h1>&copy; 2018 {{ empresa }}</h1>
              <div>` //Añado esto
})
export class MonoarchivoComponent implements OnInit {
  empresa:string = "ACME, S.A."; //Añado esto
  constructor() { }

  ngOnInit() {
  }

}
