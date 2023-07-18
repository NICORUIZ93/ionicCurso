import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.posts = this.postService.getPost();
  }

  postRecive(event: any) {
    console.log('hola desde el evento del hijo', event);
  }
}
