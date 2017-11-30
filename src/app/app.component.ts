import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingModule } from 'ngx-bootstrap/rating';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  read_only:boolean;
  rate:number;
  max:number;

  constructor() {
    this.max = 7;
    this.rate = 3;
    this.read_only = false;
  }
}
