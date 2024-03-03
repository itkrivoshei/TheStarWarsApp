import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';

export const appConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(appRoutes),
    provideAnimations(),
    provideStore()
],
};
