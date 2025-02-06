import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { InfoComponent } from '../info/info.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { CardsContainerComponent } from '../cards-container/cards-container.component';
import { LinearButtonComponent } from '../linear-button/linear-button.component';
import { SocialNetworksComponent } from '../social-networks/social-networks.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    InfoComponent,
    AboutMeComponent,
    CardsContainerComponent,
    LinearButtonComponent,
    SocialNetworksComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  abrirLink(url: string) {
    window.open(url, '_blank');
  }
}
