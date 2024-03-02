import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
})
export class AppModule {}
