import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-workflow-demo';
  constructor(){
    var x = "this is a string".replace(/i/g,"q");
    console.log(x)
  }
}
