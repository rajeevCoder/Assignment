import { Component, OnInit, Pipe } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

@Component({
  selector: 'app-advance',
  templateUrl: './advance.component.html',
  styleUrls: ['./advance.component.css'],
})
export class AdvanceComponent implements OnInit {
  post: any[];
   userid: boolean;
  url = 'http://jsonplaceholder.typicode.com/posts/';
  // searchText: string;
  constructor(http: Http ) {
     http.get(this.url).subscribe(response => this.post = response.json());
  }

  // checking(index) {
  //
  //  this.userid = !this.userid;
  //  console.log(this.userid);
  //  console.log('index', index);
  // }

  // search(find) {
  //     // console.log('searching', find);
  //   for (let i = 0; i < this.post.length; i++) {
  //     if (this.post[i] === find.value) {
  //         console.log(this.post[i]);
  //     }else {
  //       console.log('noValue', find.value);
  //       console.log('post', this.post[i].value);
  //     }
  //   }
  //   // console.log('find', this.post[find].title.value);
  // }

  ngOnInit() {
    // console.log(this.post.length.userid);
    // for (let i = 0; i < this.post.length; i++) {
    //   console.log(this.post[i].userId); }
  // }
  }
}
