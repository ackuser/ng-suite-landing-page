import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BetaComponent } from './beta/beta.component';
import { FigureComponent } from './figure/figure.component';
import { FiguresComponent } from './figures/figures.component';
import { FooterComponent } from './footer/footer.component';
import { SocialComponent } from './social/social.component';
import { WorkComponent } from './work/work.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BetaComponent,
    FigureComponent,
    FiguresComponent,
    FooterComponent,
    SocialComponent,
    WorkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
