import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-container',
  templateUrl: './welcome-container.component.html',
  styleUrls: ['./welcome-container.component.scss'],
})
export class WelcomeContainerComponent {
  public readonly routes: Array<{
    link: string;
    title: string;
    subtitle?: string;
    description?: string;
    icon: string;
  }>;

  constructor() {
    this.routes = [{
      link: '/indicadores',
      title: 'Indicadores',
      subtitle: 'Consulta de',
      description: 'Os principais indicadores fundamentalistas para avaliar a saúde financeira de qualquer empresa para montar uma carteira com boas ações.',
      icon: 'stats-chart-outline'
    }, {
      link: '/vencedoras',
      title: 'Vencedoras',
      subtitle: 'Ações de Empresas',
      description: 'Saiba quais são as empresas vencedoras atualmente através de uma versão refinada do método Bazin.',
      icon: 'podium-outline'
    }, {
      link: '/cotacao',
      title: 'Cotação',
      subtitle: 'Histórico de',
      description: 'Consulte todo histórico de cotações de qualquer empresa e avalie faixas de preço para realizar suas operações de compra e venda.',
      icon: 'pulse-outline'
    }, {
      link: '/projecao',
      title: 'Projeção',
      subtitle: 'Cotação Futura',
      description: 'Veja uma projeção de cotações futuras de uma ação para os próximos pregões e avalie a possibilidade de se posicionar hoje.',
      icon: 'trending-up-outline'
    }];
  }
}
