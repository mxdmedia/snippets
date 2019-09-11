import { ExtraSnippetEffects } from './snippet.effects';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { appMetaReducers, appReducer } from './app.state';
import { NgrxAutoEntityModule } from '@briebug/ngrx-auto-entity';
import { environment } from '../../environments/environment';
import { ModuleWithProviders } from '@angular/compiler/src/core';

@NgModule({
  imports: [
    StoreModule.forRoot(appReducer, { metaReducers: appMetaReducers }),
    EffectsModule.forRoot([ExtraSnippetEffects]),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
    NgrxAutoEntityModule.forRoot()
  ]
})
export class StateModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StateModule,
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: StateModule) {
    if (parentModule) {
      throw new Error('StateModule is already loaded. Import it in the AppModule only');
    }
  }
}
