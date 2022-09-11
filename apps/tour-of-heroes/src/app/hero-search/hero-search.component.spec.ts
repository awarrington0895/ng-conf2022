import { MockBuilder, MockRender } from 'ng-mocks';

import { HeroSearchComponent } from './hero-search.component';

describe('HeroSearchComponent', () => {
  beforeEach(() => MockBuilder(HeroSearchComponent));

  it('should create', () => {
    const fixture = MockRender(HeroSearchComponent);

    expect(fixture).toBeTruthy();
  });
});
