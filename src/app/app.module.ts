import { BrowserModule } from '@angular/platform-browser';
import {NgxElectronModule} from 'ngx-electron';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';

import { FileService } from './services/fileService/file.service';
import { EnterScreenComponent } from './components/enter-screen/enter-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    EnterScreenComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    NgxElectronModule
  ],
  providers: [
    FileService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
