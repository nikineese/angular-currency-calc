import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCurrencyComponent } from './select-currency.component';

describe('SelectComponent', () => {
  let component: SelectCurrencyComponent;
  let fixture: ComponentFixture<SelectCurrencyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectCurrencyComponent],
    });
    fixture = TestBed.createComponent(SelectCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
