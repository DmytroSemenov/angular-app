import {
  Component,
  OnInit,
  Injectable,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { Comment } from '../models/comment';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
@Injectable()
export class ToolbarComponent implements OnInit {
  currentValue: string;

  @Input() comments: Comment[];

  @Output() filterEvent = new EventEmitter<String>();

  constructor() {}

  ngOnInit() {}

  filterByName(currentValue) {
    this.filterEvent.emit(currentValue);
  }
}
