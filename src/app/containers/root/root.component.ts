import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent {
  constructor() {
    const config = {
      apiKey: 'AIzaSyCf3WBqeNU7-1Z-DIX0HC3BrHCJJOvoNJw',
      authDomain: 'blog-8591f.firebaseapp.com',
      databaseURL: 'https://blog-8591f.firebaseio.com',
      projectId: 'blog-8591f',
      storageBucket: 'blog-8591f.appspot.com',
      messagingSenderId: '162819038872',
      appId: '1:162819038872:web:ed7fcdb89b1458ac497aed',
      measurementId: 'G-QZXVMX2Q7K'
    };

    // Initialize Firebase
    firebase.initializeApp(config);
    firebase.analytics();
  }
}
