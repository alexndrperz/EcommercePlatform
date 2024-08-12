import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgInputComponent } from './img-input.component';

describe('ImgInputComponent', () => {
  let component: ImgInputComponent;
  let fixture: ComponentFixture<ImgInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImgInputComponent]
    });
    fixture = TestBed.createComponent(ImgInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
