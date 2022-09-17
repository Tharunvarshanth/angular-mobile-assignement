import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/services/post.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  post: any;
  constructor(public postService: PostService, private router: Router) {}

  ngOnInit(): void {
    this.fetchPost();
  }
  fetchPost() {
    this.postService
      .getPost(this.router.url.replace('/', ''))
      .subscribe((post) => {
        this.post = post;
      });
  }
}
