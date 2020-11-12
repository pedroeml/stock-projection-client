import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input()
  public icon: string;

  @Input()
  public title: string;

  @Input()
  public subtitle: string;

  @Input()
  public description: string;

  constructor() {
    this.icon = '';
    this.title = '';
    this.subtitle = '';
    this.description = '';
  }
}
