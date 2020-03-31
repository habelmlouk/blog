import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PostInterface } from '../../interfaces/post.interface';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  newPostForm: FormGroup;

  constructor(
    private service: PostService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.intiForm();
  }

  intiForm() {
    this.newPostForm = this.formBuilder.group({
      title: ['', Validators.required],
      contenu: ['', Validators.required]
    });
  }

  onSubmit() {
    const formValues = this.newPostForm.value;
    const post: PostInterface = {
      id: Date.now(),
      title: formValues.title,
      content: formValues.contenu,
      likes: 0,
      dislikes: 0,
      dateCreate: new Date().toString()
    };
    this.service.createPost(post);
    this.router.navigate(['posts']);
  }

  onBack() {
    this.router.navigate(['posts']);
  }
}
