import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyProductsComponent } from './buy-products.component';

describe('BuyProductsComponent', () => {
  let component: BuyProductsComponent;
  let fixture: ComponentFixture<BuyProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyProductsComponent]
    });
    fixture = TestBed.createComponent(BuyProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
