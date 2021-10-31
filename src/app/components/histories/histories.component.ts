import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-histories',
  templateUrl: './histories.component.html',
  styleUrls: ['./histories.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
