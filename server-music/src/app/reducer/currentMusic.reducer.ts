import { Action, createReducer, on } from '@ngrx/store';

import * as CurrentMusicActions from '../action/current.action';
import Music from '../model/music.model';

export type currentState = Music[];

export const initialState: currentState = [];

const currentReducer = createReducer(
    initialState,
    on(CurrentMusicActions.LisCurrentMusicActionAPI, (state, { payload }) => {
        return [...payload];
    }),
);

export function CurrentMusicReducer(state: currentState | undefined, action: Action) {
    return currentReducer(state, action);
}
