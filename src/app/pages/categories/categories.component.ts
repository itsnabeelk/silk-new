import { Component } from '@angular/core';
declare function MainJs(): void;
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  ngOnInit() {
    MainJs();
  }
}
