import { Component } from '@angular/core';
import { LinearButtonComponent } from '../linear-button/linear-button.component';

@Component({
  selector: 'app-header',
  imports: [LinearButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  abrirLink(url: string) {
    window.open(url, '_blank');
  }
}
