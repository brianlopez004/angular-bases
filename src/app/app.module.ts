import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/counter.module';

import { AppComponent } from './app.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [AppComponent, HeroComponent, ListComponent],
  imports: [BrowserModule, CounterModule, DbzModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
