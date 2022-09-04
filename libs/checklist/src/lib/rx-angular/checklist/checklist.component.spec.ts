import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxChecklistComponent } from './checklist.component';

describe('ChecklistComponent', () => {
  let component: RxChecklistComponent;
  let fixture: ComponentFixture<RxChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxChecklistComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RxChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
