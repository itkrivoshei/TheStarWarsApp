import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { charactersReducer } from './shared/store/reducers/characters.reducer';
import { filmsReducer } from './shared/store/reducers/films.reducer';
import { DataEffects } from './shared/store/effects/effects';
import { CoreModule } from './core/core.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(
      {},
      {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
          strictStateSerializability: true,
          strictActionSerializability: true,
        },
      }
    ),
    StoreModule.forFeature('characters', charactersReducer),
    StoreModule.forFeature('films', filmsReducer),
    EffectsModule.forRoot([DataEffects]),
    CoreModule,
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
