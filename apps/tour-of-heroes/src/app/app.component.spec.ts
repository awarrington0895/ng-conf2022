import { MockBuilder, MockRender } from 'ng-mocks';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => MockBuilder(AppComponent));

  it('should create the app', () => {
    expect(MockRender(AppComponent)).toBeTruthy();
  });
});
