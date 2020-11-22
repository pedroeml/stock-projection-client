import { Component } from '@angular/core';

import { Subscription } from 'rxjs';

import { WinnerModel } from '../model/winners.model';
import { WinnersService } from '../service/winners.service';

@Component({
  selector: 'app-winners-container',
  templateUrl: './winners-container.component.html',
  styleUrls: ['./winners-container.component.scss'],
})
export class WinnersContainerComponent {
  public readonly winners: WinnerModel[];
  private readonly subscriptions: Subscription;

  constructor(private readonly service: WinnersService) {
    this.winners = [];
    this.subscriptions = new Subscription();
    this.subscriptions.add(this.load());
  }

  private load(): Subscription {
    return this.service.winners().subscribe(winners => {
      this.winners.push(...winners);
    });
  }
}
