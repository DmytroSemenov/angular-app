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

  sortTableBy(field) {
    if (
      this.comments[0][field] < this.comments[this.comments.length - 1][field]
    ) {
      this.comments.sort((a, b) => {
        if (b[field] > a[field]) return 1;
        if (b[field] < a[field]) return -1;
      });
    } else {
      this.comments.sort((a, b) => {
        if (b[field] > a[field]) return -1;
        if (b[field] < a[field]) return 1;
      });
    }
  }


}
