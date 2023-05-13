import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    SharedModule
    
  ],
  exports:[
    HomeComponent
  ]
})
export class PagesModule { }

// Aplicação desenvolvida como atividade para o Bootcamp Potência Tech Angular Developer - Powered by iFood