import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder, FormsModule} from '@angular/forms';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'sub-basic',
  templateUrl: './sub-basic-component.component.html',
  styleUrls: ['./sub-basic-component.component.css']
})
export class SubBasicComponentComponent {
    form: FormGroup;

   ind: any;
   post: any = [];
   data: any = [];

  constructor (private fb: FormBuilder) {
    this.form = fb.group({
      id: new FormControl(),
      name: new FormControl(),
      email: new FormControl()
    });
  }
  get userId(){
    return this.form.get('id').value;
  }
  get userName(){
    return this.form.get('name').value;
  }
  get userEmail(){
    return this.form.get('email').value;
  }

   clicked() {

    this.post.push({'id': this.userId, 'name': this.userName, 'email': this.userEmail});
    console.log(this.userId);
    this.form.reset();
    console.log('postValue', this.post);
   }


   deleteRow(pos) {
     this.post.splice(pos, 1);
   }

// update function
    updateRow(i) {
      this.ind = i;
      console.log('index', this.ind);
      this.form.patchValue(
        {
          id: this.post[i].id,
          name: this.post[i].name,
          email: this.post[i].email
        }
      );
      // // console.log('data', this.id.value);
      // // tslint:disable-next-line:prefer-const
      // let a: any = [{id: '1', name: 'Rajeev', email: 'rg60012@gmail.com' }, {id: '2', name: 'Raj', email: 'rg@gmail.com' }];
      //   // tslint:disable-next-line:no-shadowed-variable
      //   for (let i = 0; i < a.length; i++ ) {
      //      // tslint:disable-next-line:prefer-const
      //      let k = a[i];
      //      console.log('k' , k.id);
      //   }

    }
        update() {
    // tslint:disable-next-line:max-line-length

      this.post[this.ind].id = this.userId;
      this.post[this.ind].name = this.userName;
      this.post[this.ind].email = this.userEmail;
      this.form.reset();
      console.log('id', this.post[this.ind]);

    }

}
