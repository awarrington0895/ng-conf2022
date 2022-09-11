import { provideMockStore } from '@ngrx/store/testing';
import { MockBuilder, MockRender } from 'ng-mocks';
import { AppComponent } from './app.component';

const initialState = {
  heroes: [],
};

describe('AppComponent', () => {
  beforeEach(() =>
    MockBuilder(AppComponent).provide(provideMockStore({ initialState }))
  );

  it('should create the app', () => {
    expect(MockRender(AppComponent)).toBeTruthy();
  });
});
