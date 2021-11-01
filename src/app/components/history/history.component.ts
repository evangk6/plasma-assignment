import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { HistoryInfoGQL } from '../../services/spacexGraphql.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private historyInfoService: HistoryInfoGQL
  ) { }

  historyInfo$ = this.route.paramMap.pipe(
    map((params) => params.get('id') as string),
    switchMap((id) => this.historyInfoService.fetch({ id })),
    map((res) => res.data.history)
  );

  ngOnInit(): void {
  }

}
