import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableauDeBordComponent } from './pages/tableau-de-bord/tableau-de-bord.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DeclarationsComponent } from './pages/declarations/declarations.component';
import {
  DsfrButtonModule,
  DsfrFooterModule,
  DsfrFormCheckboxModule,
  DsfrFormInputModule,
  DsfrFormSelectModule,
  DsfrHeaderModule, DsfrModalModule,
  DsfrTableModule
} from '@edugouvfr/ngx-dsfr';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { DeclartationTableComponent } from './shared/components/declartation-table/declartation-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TableauDeBordComponent,
    DeclarationsComponent,
    NotFoundComponent,
    LoginComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    DeclartationTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    // DSFR
    DsfrHeaderModule,
    DsfrFooterModule,
    DsfrFormInputModule,
    DsfrButtonModule,
    DsfrFormCheckboxModule,
    DsfrFormSelectModule,
    DsfrTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
