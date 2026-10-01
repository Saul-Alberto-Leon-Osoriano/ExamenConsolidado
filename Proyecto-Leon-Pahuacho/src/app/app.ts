import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimerComponente } from './componentes/primer-componente/primer-componente';
import { SegundoComponente } from './componentes/segundo-componente/segundo-componente';

@Component({
  imports: [RouterOutlet, PrimerComponente, SegundoComponente],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Proyecto-Leon-Pahuacho');
}
