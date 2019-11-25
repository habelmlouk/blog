import { Component, Input } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  constructor() {}

  @Input()
  listPosts: Post[];

  incrementerLove(post: Post) {
    post.likes++;
  }

  decrementerLove(post: Post) {
    post.dislikes++;
  }

  getClassCss(post: Post) {
    const loveIts = this.calculLoveIts(post.likes, post.dislikes);
    if (loveIts > 0) {
      return 'list-group-item-success list';
    }

    if (loveIts < 0) {
      return 'list-group-item-danger list';
    }

    return 'list-group-item-info list';
  }

  calculLoveIts(likes: number, dislikes: number) {
    return likes - dislikes;
  }
}
