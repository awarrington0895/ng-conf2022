import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HeroActions } from './hero.actions';

@Injectable()
export class HeroEffects {
  loadHeroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HeroActions.load),
      mergeMap(() =>
        this.heroService
          .getHeroes()
          .pipe(map((heroes) => HeroActions.retrieved({ heroes })))
      )
    )
  );

  addHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HeroActions.add),
      mergeMap(({ name }) =>
        this.heroService
          .addHero({ name } as Hero)
          .pipe(map((hero) => HeroActions.added({ hero })))
      )
    )
  );

  deleteHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HeroActions.remove),
      mergeMap(({ id }) =>
        this.heroService
          .deleteHero(id)
          .pipe(map(() => HeroActions.removed({ id })))
      )
    )
  );

  constructor(private actions$: Actions, private heroService: HeroService) {}
}
