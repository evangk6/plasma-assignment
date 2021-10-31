import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { GetHistoriesGQL } from '../../services/spacexGraphql.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-histories',
  templateUrl: './histories.component.html',
  styleUrls: ['./histories.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoriesComponent implements OnInit {

  constructor(private getHistoriesService: GetHistoriesGQL) { }

  histories$ = this.getHistoriesService.fetch()
  .pipe(map((res) => res.data.histories));

  ngOnInit(): void {
  }

}
