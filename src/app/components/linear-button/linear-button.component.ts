import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-linear-button',
  templateUrl: './linear-button.component.html',
  styleUrls: ['./linear-button.component.scss'],
})
export class LinearButtonComponent {
  @Input("btn-text") btnText: string = '';
  @Input() link: string = '';

  abrirLink(url: string) {
    window.open(url, '_blank');
  }
}
