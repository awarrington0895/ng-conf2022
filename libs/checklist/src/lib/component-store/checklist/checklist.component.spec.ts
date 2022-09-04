import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgRxChecklistComponent } from './checklist.component';

describe('ChecklistComponent', () => {
  let component: NgRxChecklistComponent;
  let fixture: ComponentFixture<NgRxChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgRxChecklistComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgRxChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
