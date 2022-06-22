import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from './post.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'facebookPost-app';
  post: any = [];
  postForm!: FormGroup;
  constructor(private postService:PostService){
  }
  ngOnInit() {
    this.postForm = new FormGroup({
      postHeader: new FormControl(''),
      image: new FormControl(''),
    });
  }
  postData(form: FormGroup) {
    this.post.push(this.postForm.value);
    this.postForm.reset();
    this.postService.postDataToFB(this.post[this.post.length-1]);
  }
}
