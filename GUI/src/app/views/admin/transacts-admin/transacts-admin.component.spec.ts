import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactsAdminComponent } from './transacts-admin.component';

describe('TransactsAdminComponent', () => {
  let component: TransactsAdminComponent;
  let fixture: ComponentFixture<TransactsAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactsAdminComponent]
    });
    fixture = TestBed.createComponent(TransactsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
