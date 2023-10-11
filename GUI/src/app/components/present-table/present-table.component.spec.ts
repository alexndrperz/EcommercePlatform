import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentTableComponent } from './present-table.component';

describe('PresentTableComponent', () => {
  let component: PresentTableComponent;
  let fixture: ComponentFixture<PresentTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresentTableComponent]
    });
    fixture = TestBed.createComponent(PresentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
