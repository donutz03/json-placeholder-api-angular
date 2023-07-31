import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-get-post',
  templateUrl: './get-post.component.html',
  styleUrls: ['./get-post.component.css']
})
export class GetPostComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<number>();

  constructor() { }

  postId: number = 1;

  ngOnInit(): void {
  }

  emitNewValue() {
    this.newItemEvent.emit(this.postId);
  }
}
