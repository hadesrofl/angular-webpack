import { Component } from '@angular/core';

import '../style/app.scss';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html'
})
export class AppComponent {
  isIn = false;

  toggleState() { // click handler for navbar toggle
    const bool = this.isIn;
    this.isIn = bool === false ? true : false;
  }
  constructor() {
  }
}
