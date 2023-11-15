import { createAction, props } from '@ngrx/store';
import { Work } from 'app/models/user';

export const getWorks = createAction(
  '[Work Load] Get WOrk',
);

export const gotWorks = createAction(
  '[Work nfo] Got WOrk',
  props<{ works: Work[] }>()
);