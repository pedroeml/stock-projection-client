import { Component } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {
  public readonly routes: Array<{
    link: string;
    label: string;
    icon: string;
  }>;

  constructor() {
    this.routes = [{
      link: '/inicio',
      label: 'Início',
      icon: 'home-outline'
    }, {
      link: '/indicadores',
      label: 'Indicadores',
      icon: 'stats-chart-outline'
    }, {
      link: '/vencedoras',
      label: 'Vencedoras',
      icon: 'podium-outline'
    }, {
      link: '/cotacao',
      label: 'Cotação',
      icon: 'pulse-outline'
    }, {
      link: '/projecao',
      label: 'Projeção',
      icon: 'trending-up-outline'
    }];
  }
}
