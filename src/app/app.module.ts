import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilterCardComponent } from './filter-card/filter-card.component';
import { ModalComponent } from './modal/modal.component';
import { NgShowModalDirective } from './directives/ng-show-modal.directive';

@NgModule({
  declarations: [
    AppComponent,
    FilterCardComponent,
    ModalComponent,
    NgShowModalDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
