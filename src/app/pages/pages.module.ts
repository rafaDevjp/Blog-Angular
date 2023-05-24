import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from '../shared/shared.module';
import { PosteComponent } from './poste/poste.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent,
    PosteComponent
  ],
  imports: [
    CommonModule,
    SharedModule
    
  ],
  exports:[
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent
  ]
})
export class PagesModule { }

// Aplicação desenvolvida como atividade para o Bootcamp Potência Tech Angular Developer - Powered by iFood