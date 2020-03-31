import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Subject } from 'rxjs';

import { PostInterface } from '../interfaces/post.interface';

import Datasnapshot = firebase.database.DataSnapshot;
@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: PostInterface[] = [];
  postsSubject = new Subject<PostInterface[]>();

  constructor() {
    this.getposts();
  }

  emitPosts(): void {
    this.postsSubject.next(this.posts);
  }

  savePost() {
    firebase.database().ref('/posts').set(this.posts);
  }

  getposts(): void {
    firebase
      .database()
      .ref('/posts')
      .on('value', (data: Datasnapshot) => {
        this.posts = data.val() ? data.val() : [];
        this.emitPosts();
        console.log(data);
      });
  }

  createPost(post: PostInterface): void {
    this.posts = [...this.posts, post];
    this.savePost();
    this.emitPosts();
  }

  deletePost(post: PostInterface) {
    this.posts = this.posts.filter((item) => item.id !== post.id);
    this.savePost();
    this.emitPosts();
  }

  editPost(newPost: PostInterface) {
    this.posts = this.posts.map((item) => {
      if (item.id === newPost.id) {
        return newPost;
      }

      return item;
    });

    this.savePost();
    this.emitPosts();
  }
}
