import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
      name: ['', [
        Validators.required
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      comment: ''
    });
  }

  get name() {
    return this.commentForm.get("name");
  }

  get email() {
    return this.commentForm.get("email");
  }

  get comment() {
    return this.commentForm.get("comment");
  }

  onSend(): void {
    console.log(this.commentForm);
  }

}
