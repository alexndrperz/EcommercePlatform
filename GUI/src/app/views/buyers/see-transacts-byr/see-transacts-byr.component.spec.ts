import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeTransactsByrComponent } from './see-transacts-byr.component';

describe('SeeTransactsByrComponent', () => {
  let component: SeeTransactsByrComponent;
  let fixture: ComponentFixture<SeeTransactsByrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeeTransactsByrComponent]
    });
    fixture = TestBed.createComponent(SeeTransactsByrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
