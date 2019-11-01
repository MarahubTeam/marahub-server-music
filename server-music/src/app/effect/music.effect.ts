import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { MusicService } from '../services/music.service';
import * as MusicActions from '../action/music.action';
import * as CurrentActions from '../action/current.action';
import { EMPTY } from 'rxjs';

@Injectable()
export class MusicEffects {

  searchMusics$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MusicActions.GetMusicAction),
      mergeMap((action) => this.musicsService.search(action.id)
        .pipe(
          map(musics => {
            return MusicActions.SearchMusicActionAPI({ payload: musics })
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
            return CurrentActions.LisCurrentMusicActionAPI({ payload: musics })
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