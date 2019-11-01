import { createAction, props } from '@ngrx/store';

export const GetMusicAction = createAction('[Music] - Get Music', props<{ id: string}>());

export const SearchMusicActionAPI = createAction('[Musics API] Musics Loaded Success', props<{ payload: any }>());