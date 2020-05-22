import { Injectable } from '@angular/core';

import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as MusicActions from '../action/music.action';
import * as CurrentActions from '../action/current.action';

import { MusicService } from '../services/music.service';

@Injectable()
export class MusicEffects {

  searchMusics$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MusicActions.GetMusicAction),
      mergeMap((action) => this.musicsService.search(action.id)
        .pipe(
          map(musics => {
            return MusicActions.SearchMusicActionAPI({ payload: musics });
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  getTrendingMusics$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MusicActions.GetTrendingAction),
      mergeMap(() => this.musicsService.getTrendingList()
        .pipe(
          map(musics => {
            return MusicActions.GetTrendingActionAPI({ payload: musics });
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  loadMusics$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CurrentActions.ListCurrentMusicAction),
      mergeMap(() => this.musicsService.getlist()
        .pipe(
          map(musics => {
            return CurrentActions.LisCurrentMusicActionAPI({ payload: musics });
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private musicsService: MusicService
  ) { }
}
