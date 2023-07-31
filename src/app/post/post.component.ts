import { Component, OnInit} from '@angular/core';

interface postInterface {
  id: number,
  title: string,
  body: string,
  userId: number
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: postInterface = {
    id: 0,
    title: '',
    body: '',
    userId: 0
  } 
  id: number = 1;

  async getPost() { 
    await fetch(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
          .then(data => data.json())
          .then(data => {
            this.post = data;
          })
  }
  constructor() { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit() {
    this.getPost(); 
  }

  newNumberEmitted(value: number) {
    this.id = value;
    this.getPost();
  }

}
