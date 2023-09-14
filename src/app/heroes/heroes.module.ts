import { NgModule } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';

@NgModule({
  exports: [
    HeroComponent,
    ListComponent
  ],
  declarations:
  [
  HeroComponent,
  ListComponent
  ],
})
export class HeroModule { }
