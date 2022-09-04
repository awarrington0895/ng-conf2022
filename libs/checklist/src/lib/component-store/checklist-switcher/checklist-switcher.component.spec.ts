import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgRxChecklistSwitcherComponent } from './checklist-switcher.component';

describe('ChecklistSwitcherComponent', () => {
  let component: NgRxChecklistSwitcherComponent;
  let fixture: ComponentFixture<NgRxChecklistSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgRxChecklistSwitcherComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgRxChecklistSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
