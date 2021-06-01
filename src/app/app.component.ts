import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-workflow-demo';
  public demofunction() {
    x = 23;
    let x;
    const z = /(.*?)a(?:d*)a(?!(a+)b)\2(.*)/;
  }
}
