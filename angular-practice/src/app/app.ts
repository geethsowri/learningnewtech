import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{ title() }}!</h1>
    <p>hello! hey there</p>
    <router-outlet />
  `,
  styles: [`
    p {
      color: blue;
    }
    `],
})
export class App {
  protected readonly title = signal('angular-practice');
}
