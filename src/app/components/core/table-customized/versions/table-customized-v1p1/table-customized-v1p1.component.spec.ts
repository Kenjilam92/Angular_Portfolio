import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCustomizedV1p1Component } from './table-customized-v1p1.component';

describe('TableCustomizedV1p1Component', () => {
  let component: TableCustomizedV1p1Component;
  let fixture: ComponentFixture<TableCustomizedV1p1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCustomizedV1p1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCustomizedV1p1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
