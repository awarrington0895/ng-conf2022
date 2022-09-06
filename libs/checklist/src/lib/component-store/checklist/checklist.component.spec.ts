import { ComponentFixture, TestBed } from '@angular/core/testing';
import { createSpyFromClass, Spy } from 'jest-auto-spies';
import { MockProvider } from 'ng-mocks';
import { TodoService } from '../../todo.service';

import { subscribeSpyTo } from '@hirez_io/observer-spy';
import { ComponentStore } from '@ngrx/component-store';
import { of } from 'rxjs';
import { Checklist } from '../../checklist';
import { Task } from '../../task';
import { NgRxChecklistComponent } from './checklist.component';

const mockTask: Task = {
  id: '1',
  name: 'Mock Task',
};

const mockChecklist: Checklist = {
  id: '1',
  name: 'Mock Checklist',
  tasks: [mockTask],
};

describe('ChecklistComponent', () => {
  describe('DOM Tests', () => {
    let component: NgRxChecklistComponent;
    let fixture: ComponentFixture<NgRxChecklistComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [NgRxChecklistComponent],
        providers: [MockProvider(TodoService)],
      }).compileComponents();

      fixture = TestBed.createComponent(NgRxChecklistComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('Class Tests', () => {
    let component: NgRxChecklistComponent;
    let todoSpy: Spy<TodoService>;

    beforeEach(() => {
      todoSpy = createSpyFromClass(TodoService);

      component = new NgRxChecklistComponent(
        new ComponentStore<Checklist>(),
        todoSpy
      );
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should get checklist data when it is initialized', () => {
      todoSpy.get.mockImplementationOnce(() => of(mockChecklist));

      component.id = mockChecklist.id;

      expect(todoSpy.get).toBeCalledWith(mockChecklist.id);
    });

    it('should have name$ property from checklist', () => {
      todoSpy.get.mockImplementationOnce(() => of(mockChecklist));

      component.id = mockChecklist.id;

      const nameSpy = subscribeSpyTo(component.name$);

      expect(nameSpy.getLastValue()).toBe(mockChecklist.name);
    });

    it('should have tasks$ property from checklist', () => {
      todoSpy.get.mockImplementationOnce(() => of(mockChecklist));

      component.id = mockChecklist.id;

      const tasksSpy = subscribeSpyTo(component.tasks$);

      expect(tasksSpy.getLastValue()).toStrictEqual(mockChecklist.tasks);
    });

    it('should remove task from list when completed', () => {
      todoSpy.get.mockImplementationOnce(() => of(mockChecklist));
      todoSpy.completeTask.mockImplementationOnce(() => of(mockTask.id));

      component.id = mockChecklist.id;

      component.completeTask$(mockTask.id);

      const tasksSpy = subscribeSpyTo(component.tasks$);

      expect(todoSpy.completeTask).toHaveBeenCalledWith(mockTask.id);

      expect(tasksSpy.getLastValue()).toStrictEqual([]);
    });
  });
});
