
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SubBasicComponentComponent } from '../sub-basic-component/sub-basic-component.component';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent {
    post: any = [];
  // id: any = [];
    // name: any = [];
    // email: any = [];
 // constructor(private subasicComponent: SubBasicComponentComponent) {
      // tslint:disable-next-line:max-line-length
     // this.post.push({'id': this.subasicComponent.userId, 'name': this.subasicComponent.userName, 'email': this.subasicComponent.userEmail});

 // }

}
