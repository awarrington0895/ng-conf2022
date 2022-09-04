import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistSwitcherComponent } from './checklist-switcher.component';

describe('ChecklistSwitcherComponent', () => {
  let component: ChecklistSwitcherComponent;
  let fixture: ComponentFixture<ChecklistSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChecklistSwitcherComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChecklistSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
