import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { PostInterface } from '../../interfaces/post.interface';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  pageOfItems: Array<PostInterface>;
  posts: PostInterface[] = [];
  postSubscribe: Subscription;

  constructor(private service: PostService, private router: Router) {}

  ngOnInit() {
    this.postSubscribe = this.service.postsSubject.subscribe(
      (posts: PostInterface[]) => {
        this.posts = posts;
      }
    );
    this.service.emitPosts();
  }

  onChangePage(pageOfItems: Array<PostInterface>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    console.log(pageOfItems);
  }

  getClassCss(post: PostInterface) {
    const lovIt: number = this.claculLoveIt(post.likes, post.dislikes);
    if (lovIt > 0) {
      return 'list-group-item-success list';
    }

    if (lovIt < 0) {
      return 'list-group-item-danger list';
    }

    return 'list-group-item-info list';
  }

  claculLoveIt(likes: number, dislikes: number): number {
    return likes - dislikes;
  }

  onDeletePost(post: PostInterface) {
    this.service.deletePost(post);
  }

  incrementerLove(post: PostInterface): false {
    const newPost = { ...post };
    newPost.likes++;
    newPost.dateCreate = new Date(Date.parse(Date())).toString();
    this.service.editPost(newPost);
    return false;
  }

  decrementerLove(post: PostInterface): false {
    const newPost = { ...post };
    newPost.dislikes++;
    newPost.dateCreate = new Date(Date.parse(Date())).toString();
    this.service.editPost(newPost);
    return false;
  }
}
