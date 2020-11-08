import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.scss'],
})
export class IndicatorComponent {
  @Input()
  public label: string;

  @Input()
  public value: number;
}
