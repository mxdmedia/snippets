import { buildState, IEntityState } from '@briebug/ngrx-auto-entity';
import { createReducer } from '@ngrx/store';
import { Snippet } from '../models';

export const {
  initialState: snippetInitialState,
  selectors: snippetSelectors,
  facade: SnippetFacadeBase
} = buildState(Snippet);

export function snippetReducer(state = snippetInitialState): IEntityState<Snippet> {
  return state;
}
