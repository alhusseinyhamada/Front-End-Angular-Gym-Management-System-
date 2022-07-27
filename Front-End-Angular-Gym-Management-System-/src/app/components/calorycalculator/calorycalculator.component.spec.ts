import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalorycalculatorComponent } from './calorycalculator.component';

describe('CalorycalculatorComponent', () => {
  let component: CalorycalculatorComponent;
  let fixture: ComponentFixture<CalorycalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalorycalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalorycalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
