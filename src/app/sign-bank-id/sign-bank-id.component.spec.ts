import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignBankIdComponent } from './sign-bank-id.component';

describe('SignBankIdComponent', () => {
  let component: SignBankIdComponent;
  let fixture: ComponentFixture<SignBankIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignBankIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignBankIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
