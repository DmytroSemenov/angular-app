import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../models/comment';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
@Injectable()
export class ControllerComponent implements OnInit {
  defaultComments: Comment[];
  filteredComment: Comment[];
  selectedComment: Comment;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http
      .get('https://jsonplaceholder.typicode.com/comments')
      .subscribe((data: Comment[]) => {
        this.defaultComments = data;
        this.filteredComment = data;
      });
  }

  onCommentSelect(comment) {
    this.selectedComment = comment;
  }

  inputChanged(inputText) {
    const listOfComments = this.defaultComments;
    if (inputText) {
      this.filteredComment = listOfComments.filter(item => {
        return item.name.includes(inputText);
      });
    } else {
      this.filteredComment = this.defaultComments;
    }
  }
}
