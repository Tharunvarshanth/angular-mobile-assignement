import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  posts: any;
  constructor(public postService: PostService) {}

  ngOnInit(): void {
    this.fetchPosts();
  }
  fetchPosts() {
    console.log('Fetch Posts');
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
}
