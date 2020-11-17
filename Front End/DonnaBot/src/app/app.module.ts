import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatWidgetComponent } from './components/chat-widget/chat-widget.component';
import { ChatPopupComponent } from './components/chat-popup/chat-popup.component';
import { ChatNavbarComponent } from './components/chat-navbar/chat-navbar.component';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { ChatFormComponent } from './components/chat-form/chat-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './shared-modules/angular-material/angular-material.module';
import { MDBBootstrapModule,ButtonsModule, WavesModule, CollapseModule } from 'angular-bootstrap-md'
@NgModule({
  declarations: [
    AppComponent,
    ChatWidgetComponent,
    ChatPopupComponent,
    ChatNavbarComponent,
    ChatWindowComponent,
    ChatFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
