import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input('title-project') titleProject: string = '';
  @Input('categorie1') categorie1: string = '';
  @Input('categorie2') categorie2: string = '';
  @Input('categorie3') categorie3: string = '';
  @Input('description') description: string = '';
  @Input('link') link: string = '';

  abrirLink(url: string) {
    window.open(url, '_blank');
  }
}
