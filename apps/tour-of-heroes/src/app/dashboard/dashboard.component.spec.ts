import { provideMockStore } from '@ngrx/store/testing';
import { MockBuilder, MockRender } from 'ng-mocks';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  const initialState = { heroes: [] };

  beforeEach(() =>
    MockBuilder(DashboardComponent).provide(provideMockStore({ initialState }))
  );

  it('should create', () => {
    const fixture = MockRender(DashboardComponent);

    expect(fixture).toBeTruthy();
  });
});
