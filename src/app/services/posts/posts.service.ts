import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  postId: any;
  private endpoint = 'https://jsonplaceholder.typicode.com/posts/';
  constructor(private http: HttpClient) { }
  updatePostId(id: any) {
    this.postId = id;
  }

  loadPosts(): Observable<any> {
    return this.http.get(this.endpoint);
  }
  getPostById(id: any) {
    return this.http.get(this.endpoint + id);
  }
}
