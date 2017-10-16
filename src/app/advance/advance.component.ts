import { Component, OnInit, Pipe } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-advance',
  templateUrl: './advance.component.html',
  styleUrls: ['./advance.component.css'],
})
export class AdvanceComponent implements OnInit {
  post: any[];
   userid: boolean;

  // subscribe((results) => {
  //   this.players = results[0];
  //   this.teams   = results[1];
  //   this.noPlayers = 0 === this.players.length;
  //   loading.dismiss();
  url = 'http://jsonplaceholder.typicode.com/posts/';
  constructor(http: Http ) {
     http.get(this.url).subscribe(response => this.post = response.json());
    // this.userid = true;
  }

  checking(check) {

   this.userid = !this.userid;
   console.log(this.userid);
   console.log('check', check);
  }

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
