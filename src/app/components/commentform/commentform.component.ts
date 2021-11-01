import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-commentform',
  templateUrl: './commentform.component.html',
  styleUrls: ['./commentform.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
