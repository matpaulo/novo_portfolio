import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-networks',
  imports: [NgOptimizedImage],
  templateUrl: './social-networks.component.html',
  styleUrl: './social-networks.component.scss',
})
export class SocialNetworksComponent {
  abrirLink(url: string) {
    window.open(url, '_blank');
  }
}
