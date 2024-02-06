import { Component} from '@angular/core';
declare function MainJs(): void;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  ngOnInit(): void {
    MainJs();
  }

  orbMenuBtnClicked: boolean = false;
  orbMenuOpened: boolean = false;

  toggleOrbMenu() {
    this.orbMenuBtnClicked = !this.orbMenuBtnClicked;
    this.orbMenuOpened = !this.orbMenuOpened;
    setTimeout(this.anim3, 100);
  }

  anim3() {
    // Your anim3 logic here
  }

  toggleSubMenu(event: Event) {
    const target = event.target as HTMLElement;
    const subMenu = target.nextElementSibling as HTMLElement;
    subMenu.classList.toggle('orb-active');
  }
}
