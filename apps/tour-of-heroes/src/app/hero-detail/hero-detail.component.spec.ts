import { Location } from '@angular/common';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  convertToParamMap,
} from '@angular/router';
import { MockBuilder, MockRender } from 'ng-mocks';
import { of } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HeroDetailComponent } from './hero-detail.component';

const mockHero: Hero = {
  id: 1,
  name: 'Mock',
};

const mockActivatedRoute = {
  snapshot: {
    paramMap: convertToParamMap({ id: '1' }),
  } as ActivatedRouteSnapshot,
};

describe('HeroDetailComponent', () => {
  beforeEach(() =>
    MockBuilder(HeroDetailComponent)
      .mock(ActivatedRoute, mockActivatedRoute)
      .mock(HeroService, { getHero: () => of(mockHero) })
      .mock(Location)
  );

  it('should create', () => {
    const fixture = MockRender(HeroDetailComponent);

    expect(fixture).toBeTruthy();
  });
});
