import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionTableComponent } from './division-table.component';

describe('DivisionTableComponent', () => {
  let component: DivisionTableComponent;
  let fixture: ComponentFixture<DivisionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivisionTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivisionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
