import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCustomizedV1p2Component } from './table-customized-v1p2.component';

describe('TableCustomizedV1p2Component', () => {
  let component: TableCustomizedV1p2Component;
  let fixture: ComponentFixture<TableCustomizedV1p2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCustomizedV1p2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCustomizedV1p2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
