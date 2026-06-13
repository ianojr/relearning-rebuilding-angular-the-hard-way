import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { About } from './component/about/about';
import { Contact } from './component/contact/contact';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, About, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('newangularapp1 Collins');
}
