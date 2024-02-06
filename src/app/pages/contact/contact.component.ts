import { Component } from '@angular/core';
declare function MainJs(): void;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  ngOnInit() {
    MainJs();
  }
}
