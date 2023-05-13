import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleMainComponent } from './components/title-main/title-main.component';
import { OtherCardsComponent } from './components/other-cards/other-cards.component';
import { BigCardComponent } from './components/big-card/big-card.component';



@NgModule({
  declarations: [
    TitleMainComponent,
    OtherCardsComponent,
    BigCardComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:  [
    TitleMainComponent,
    OtherCardsComponent,
    BigCardComponent
  ],
})
export class SharedModule { }
