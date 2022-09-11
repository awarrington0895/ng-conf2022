import { provideMockStore } from '@ngrx/store/testing';
import { MockBuilder, MockRender } from 'ng-mocks';
import { of } from 'rxjs';
import { initialState } from '../+state/app.state';
import { HeroService } from '../hero.service';
import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  beforeEach(() =>
    MockBuilder(HeroesComponent)
      .mock(HeroService, { getHeroes: () => of([]) })
      .provide(provideMockStore({ initialState }))
  );

  it('should create', () => {
    expect(MockRender(HeroesComponent)).toBeTruthy();
  });
});
