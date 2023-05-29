import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prueba-componente',
  templateUrl: './prueba-componente.component.html',
  styleUrls: ['./prueba-componente.component.css']
})
export class PruebaComponenteComponent implements OnInit {
  @Input() counter: number = 5;


  title: string = ''

  ngOnInit(): void {
    this.title = 'Componente contador'
  }

  incrementCounter(): void {
   this.counter++;
}

}
