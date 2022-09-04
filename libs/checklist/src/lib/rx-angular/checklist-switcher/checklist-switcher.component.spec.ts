import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxChecklistSwitcherComponent } from './checklist-switcher.component';

describe('ChecklistSwitcherComponent', () => {
  let component: RxChecklistSwitcherComponent;
  let fixture: ComponentFixture<RxChecklistSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxChecklistSwitcherComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RxChecklistSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
