import { Component, OnInit, Input, Injectable, Output, EventEmitter } from '@angular/core';
import { Comment } from '../models/comment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
@Injectable()
export class TableComponent implements OnInit {

  @Input() comments: Comment[];

  @Output() commentSelectEvent = new EventEmitter<Comment>();

  selectedComment: Comment;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  selectComment(comment: Comment) {
    this.selectedComment = comment;
    this.commentSelectEvent.emit(comment);
  }
}
