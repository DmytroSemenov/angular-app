import {
  Component,
  OnInit,
  Input,
  Injectable,
  Output,
  EventEmitter
} from '@angular/core';
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

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  selectComment(comment: Comment) {
    this.selectedComment = comment;
    this.commentSelectEvent.emit(comment);
  }

  sortTableById(field) {
    if (this.comments[0][field] === 1) {
      this.comments.sort((a, b) => {
        return b[field] - a[field];
      });
    } else {
      this.comments.sort((a, b) => {
        return a[field] - b[field];
      });
    }
  }

  sortTableByName(field) {
    if (true) {
      this.comments.sort((a, b) => {
        if (b[field] > a[field]) return -1;
        if (b[field] < a[field]) return 1;
      });
    }
  }
}
