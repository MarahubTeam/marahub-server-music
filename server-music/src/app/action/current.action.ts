import { createAction, props } from '@ngrx/store';
import Music from '../model/Music.model';

export const AddCurrentMusicAction = createAction('[CurrentMusic] - Add CurrentMusic Success', props<{ payload: any}>());
export const AddListCurrentMusicActionAPI = createAction('[CurrentMusic] - Add CurrentMusic ', props<{ payload: Music}>());

export const RemoveCurrentMusicAction = createAction('[CurrentMusic] - Remove CurrentMusic Success', props<{ payload: any}>());
export const RemoveCurrentMusicActionAPI = createAction('[CurrentMusic] - Remove CurrentMusic');

export const ListCurrentMusicAction = createAction('[CurrentMusic] - List CurrentMusic');
export const LisCurrentMusicActionAPI = createAction('[CurrentMusic] - List CurrentMusic Sucess', props<{ payload: any}>());

export const SocketMusicAction = createAction('[Socket] - Add CurrentMusic', props<{ payload: any, event: string}>());

