import { AppComponent } from '../app.component';
import { AdvanceComponent } from '../advance/advance.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from '../navbar/navbar.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubBasicComponentComponent } from './sub-basic-component.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';


describe('SubBasicComponentComponent', () => {
  let component: SubBasicComponentComponent;
  let fixture: ComponentFixture<SubBasicComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubBasicComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubBasicComponentComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

describe('SubBasicComponentComponent', () => {
  let component: SubBasicComponentComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, NavbarComponent, AdvanceComponent, SubBasicComponentComponent],
      imports: [RouterTestingModule, FormsModule, ReactiveFormsModule]
    }).compileComponents();
    component = TestBed.createComponent(SubBasicComponentComponent);
  }));

  beforeEach(() => {
   // tslint:disable-next-line:prefer-const
    component = new SubBasicComponentComponent(new FormBuilder());
    it('should be name' , () => {
      expect(component.form.contains('id')).toBe(true);
      expect(component.form.contains('name')).toBe(true);
      expect(component.form.contains('email')).toBe(true);
    });
    it('should be valid', () => {
          // tslint:disable-next-line:prefer-const
          let control = component.form.get('id');
          control.setValue(1);
          expect(control.valid).toBe(true);

      // tslint:disable-next-line:prefer-const
      let controlName = component.form.get('name');
      controlName.setValue('rajeev');
      expect(controlName.valid).toBe(true);

      // tslint:disable-next-line:prefer-const
      let controlEmail = component.form.get('email');
      controlEmail.setValue('rg60012@gmail.com');
      expect(controlName.valid).toBe(true);

    });
  });
});
