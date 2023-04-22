import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCustomizedComponent } from './table-customized.component';

describe('TableCustomizedComponent', () => {
  let component: TableCustomizedComponent;
  let fixture: ComponentFixture<TableCustomizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCustomizedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCustomizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
