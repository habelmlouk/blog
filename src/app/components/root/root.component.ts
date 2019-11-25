import { Component } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';

const dateUpdate = new Date();

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent {
  title = 'blog';

  posts: Post[] = [
    {
      title: 'Mon premier post',
      content: 'Quia et suscipit nsuscipit recusandae consequuntur expedita',
      likes: 0,
      dislikes: 0,
      dateCreate: dateUpdate
    },
    {
      title: 'Mon deuxième post',
      content: 'Ma uia et suscipit nsuscipit recusandae consequuntur expedita',
      likes: 0,
      dislikes: 0,
      dateCreate: dateUpdate
    }
  ];
}
