import { Action, createReducer, on } from '@ngrx/store';

import * as MusicActions from '../action/music.action';
import Music from '../model/music.model';

export type State = Music[];

export const initialState: State = [];

const reducer = createReducer(
    initialState,
    on(MusicActions.SearchMusicActionAPI, (state, { payload }) => {
        return [...payload];
    }),
    on(MusicActions.GetTrendingActionAPI, (state, { payload }) => {
        return [...payload];
    })
);

export function MusicReducer(state: State | undefined, action: Action) {
    return reducer(state, action);
}
