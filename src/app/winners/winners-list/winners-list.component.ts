import { Component, Input } from '@angular/core';

import { WinnerModel } from '../model/winners.model';

@Component({
  selector: 'app-winners-list',
  templateUrl: './winners-list.component.html',
  styleUrls: ['./winners-list.component.scss'],
})
export class WinnersListComponent {
  @Input()
  public winners: WinnerModel[];

  constructor() {
    this.winners = [];
  }
}
