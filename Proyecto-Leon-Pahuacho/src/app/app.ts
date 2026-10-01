import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimerComponente } from './componentes/primer-componente/primer-componente';
import { SegundoComponente } from './componentes/segundo-componente/segundo-componente';


import { TercerComponente } from './componentes/tercer-componente/tercer-componente';
import { CuartoComponente } from './componentes/cuarto-componente/cuarto-componente';
import { QuintoComponente } from './componentes/quinto-componente/quinto-componente';

@Component({
  imports: [RouterOutlet, TercerComponente, CuartoComponente, QuintoComponente],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Proyecto-Leon-Pahuacho');

}
