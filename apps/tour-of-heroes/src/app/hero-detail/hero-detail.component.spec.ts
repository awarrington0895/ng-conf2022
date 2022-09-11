import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  convertToParamMap,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { MockBuilder, MockRender } from 'ng-mocks';
import { of } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HeroDetailComponent } from './hero-detail.component';

const mockActivatedRoute = {
  snapshot: {
    paramMap: convertToParamMap({ id: 1 }),
  } as ActivatedRouteSnapshot,
};

const mockHero: Hero = {
  id: 1,
  name: 'Mock',
};

const mockHeroService = {
  getHero: () => of(mockHero),
};

describe('HeroDetailComponent', () => {
  beforeEach(() =>
    MockBuilder(HeroDetailComponent)
      .mock(ActivatedRoute, mockActivatedRoute)
      .mock(HeroService, mockHeroService)
      .mock(Store)
  );

  it('should create', () => {
    expect(MockRender(HeroDetailComponent)).toBeTruthy();
  });
});
