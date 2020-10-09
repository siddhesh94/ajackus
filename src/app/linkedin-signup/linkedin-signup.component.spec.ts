import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinSignupComponent } from './linkedin-signup.component';

describe('LinkedinSignupComponent', () => {
  let component: LinkedinSignupComponent;
  let fixture: ComponentFixture<LinkedinSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkedinSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedinSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
