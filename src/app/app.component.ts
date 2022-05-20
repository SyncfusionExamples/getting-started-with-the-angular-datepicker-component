import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myangularproject';
  public dateValue: Date = new Date(2022, 4, 18);
  public minDate: Date = new Date(2022, 4, 7);
  public maxDate: Date = new Date(2022, 4, 23);
}
