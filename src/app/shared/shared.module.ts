import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { SearcherComponent } from './searcher/searcher.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BackComponent } from './back/back.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CardComponent, SearcherComponent, HeaderComponent, FooterComponent, BackComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    CardComponent,
    SearcherComponent,
    HeaderComponent,
    FooterComponent,
    BackComponent,
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class SharedModule { }
