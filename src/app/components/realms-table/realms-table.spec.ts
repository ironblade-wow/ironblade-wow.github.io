import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealmsTable } from './realms-table';

describe('RealmsTable', () => {
  let component: RealmsTable;
  let fixture: ComponentFixture<RealmsTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealmsTable],
    }).compileComponents();

    fixture = TestBed.createComponent(RealmsTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
