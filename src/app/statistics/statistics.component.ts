import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from '../posts/posts.service';

@Component({
    templateUrl: './statistics.component.html',
  })

export class StatisticsComponent {
  res = '';
  constructor(
    public postsService: PostsService,
  ) {}
  ngOnInit() {
    this.postsService.getPosts(0,100);
    this.res = '5';
  }
}
