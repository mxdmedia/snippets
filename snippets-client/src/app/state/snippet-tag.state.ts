import { buildState, IEntityState } from '@briebug/ngrx-auto-entity';
import { createReducer } from '@ngrx/store';
import { SnippetTag } from '../models';

export const {
  initialState: snippetTagInitialState,
  selectors: snippetTagSelectors,
  facade: SnippetTagFacadeBase
} = buildState(SnippetTag);

export function snippetTagReducer(state = snippetTagInitialState): IEntityState<SnippetTag> {
  return state;
}
