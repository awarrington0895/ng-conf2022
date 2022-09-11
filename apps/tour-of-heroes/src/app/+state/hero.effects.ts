import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
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

  constructor(private actions$: Actions, private heroService: HeroService) {}
}
