import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule, withFetch } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app/app.routes';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { charactersReducer } from './app/shared/store/reducers/characters.reducer';
import { filmsReducer } from './app/shared/store/reducers/films.reducer';
import { DataEffects } from './app/shared/store/effects/effects';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withFetch()),
    importProvidersFrom(
      HttpClientModule,
      RouterModule.forRoot(appRoutes),
      StoreModule.forRoot(
        {
          characters: charactersReducer,
          films: filmsReducer,
        },
        {
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
            strictStateSerializability: true,
            strictActionSerializability: true,
          },
        }
      ),
      EffectsModule.forRoot([DataEffects])
    ),
    provideAnimationsAsync(),
  ],
}).catch((err) => console.error(err));
