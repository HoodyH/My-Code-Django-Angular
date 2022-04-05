import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

// services
import { LocalStorageService } from './services/storage.service'

// ui
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';

// pages
import { HeaderComponent } from './pages/header/header.component';
import { SidenavComponent } from './pages/sidenav/sidenav.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,

    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatToolbarModule
  ],
  exports: [
    HeaderComponent,
    SidenavComponent,
  ],
  providers: [
    LocalStorageService,
  ]
})
export class FrameModule { }
