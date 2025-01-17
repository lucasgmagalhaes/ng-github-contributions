import { Component, Input, OnInit } from '@angular/core';
import { DEFAULT_CELL_SIZE, Months, Themes } from '../../../constants';
import { ColorIntensity } from '../../../enums';
import { GithubBoardOptions } from '../../../types';

@Component({
  selector: 'board-cell',
  templateUrl: './board-cell.component.html',
  styleUrls: ['./board-cell.component.css']
})
export class BoardCellComponent implements OnInit {
  @Input() date: Date = new Date;
  @Input() contributions: number = 0;
  @Input() colorIntensity: number = 0;
  @Input() options: GithubBoardOptions = {};
  @Input() disabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public get color(): string{
    const { colorPalette = Themes.default } = this.options;
    switch(this.colorIntensity){
      case ColorIntensity.LOW: return colorPalette.low;
      case ColorIntensity.MEDIUM: return colorPalette.medium;
      case ColorIntensity.HIGH: return colorPalette.high;
      case ColorIntensity.HIGHER: return colorPalette.higher;
      default: return colorPalette.none;
    }
  }

  public get tooltipText(): string{
    return `${this.contributions} contributions on ${this.dateText}`;
  }

  private get dateText(): string{
    return `${Months[this.date.getMonth()]} ${this.date.getDate()}, ${this.date.getFullYear()}`;
  }

  public get size(): string{
    const cellSize = this.options.cellSize ?? DEFAULT_CELL_SIZE;
    return `${cellSize}px`;
  }

}
