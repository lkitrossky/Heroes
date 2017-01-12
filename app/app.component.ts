import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1><h2>Using h2 in template</h2><button>Button</button>`,
})
export class AppComponent  { name = 'Angular from Levi3'; }
