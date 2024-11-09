import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'testapp';
  constructor(){
    
  }
  public doathing(){
    if (window['ActionChannel']) {
      window['ActionChannel'].postMessage('Hello from Angular!');
    } else {
      console.error('Toaster channel is not available');
    }
  } 

  /**
   * name
   */
  public name() {
    
  }
}

