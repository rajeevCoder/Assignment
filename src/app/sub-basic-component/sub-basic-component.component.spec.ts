import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubBasicComponentComponent } from './sub-basic-component.component';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
