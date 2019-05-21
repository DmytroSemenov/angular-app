import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../models/comment';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() comment: Comment;

  constructor() { }

  ngOnInit() {
    console.log(this.comment);
  }

}
