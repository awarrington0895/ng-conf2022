import { MockBuilder, MockRender } from 'ng-mocks';
import { of } from 'rxjs';
import { HeroService } from '../hero.service';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  beforeEach(() =>
    MockBuilder(DashboardComponent).mock(HeroService, {
      getHeroes: () => of([]),
    })
  );

  it('should create', () => {
    expect(MockRender(DashboardComponent)).toBeTruthy();
  });
});
