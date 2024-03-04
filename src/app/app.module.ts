import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DataEffects } from './store/effects/effects';
import { reducer as dataReducer } from './store/reducers/reducer';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot({ data: dataReducer }),
    EffectsModule.forRoot([DataEffects]),
  ],
  providers: [],
})
export class AppModule {}
