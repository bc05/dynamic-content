import { Component } from '@angular/core';
import { AlertComponent } from './shared/alert/alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  component = AlertComponent;

  title = 'dynamic-content';
}
