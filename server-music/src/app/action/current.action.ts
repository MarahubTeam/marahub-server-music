import { createAction, props } from '@ngrx/store';

export const ListCurrentMusicAction = createAction('[CurrentMusic] - List CurrentMusic');
export const LisCurrentMusicActionAPI = createAction('[CurrentMusic] - List CurrentMusic Sucess', props<{ payload: any}>());
