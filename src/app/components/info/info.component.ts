import { Component } from '@angular/core';
import { LinearButtonComponent } from '../linear-button/linear-button.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-info',
  imports: [LinearButtonComponent, NgOptimizedImage],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
})
export class InfoComponent {
  abrirLink(url: string) {
    window.open(url, '_blank');
  }
}
