import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclartationTableComponent } from './declartation-table.component';

describe('DeclartationTableComponent', () => {
  let component: DeclartationTableComponent;
  let fixture: ComponentFixture<DeclartationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclartationTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeclartationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
