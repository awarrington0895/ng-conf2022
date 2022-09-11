import { MockBuilder, MockRender } from 'ng-mocks';
import { of } from 'rxjs';
import { HeroService } from '../hero.service';
import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  beforeEach(() =>
    MockBuilder(HeroesComponent).mock(HeroService, { getHeroes: () => of([]) })
  );

  it('should create', () => {
    expect(MockRender(HeroesComponent)).toBeTruthy();
  });
});
