import { Component } from '@angular/core';
declare function MainJs():void;
@Component({
  selector: 'app-pre-loader',
  templateUrl: './pre-loader.component.html',
  styleUrl: './pre-loader.component.css'
})
export class PreLoaderComponent {
  ngOnInit() {
    MainJs();
  }
}
