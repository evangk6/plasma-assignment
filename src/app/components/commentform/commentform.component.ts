import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-commentform',
  templateUrl: './commentform.component.html',
  styleUrls: ['./commentform.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentformComponent implements OnInit {

  commentForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.commentForm = this.fb.group({
      name: '',
      email: '',
      comment: ''
    });
  }

  onSend(): void {
    console.log(this.commentForm);
  }

}
