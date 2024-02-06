import { Component } from '@angular/core';
declare function MainJs():void;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'silk-new';
  ngOnInit() {
    MainJs();
  }
}
