import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// main
import { AppComponent } from './app.component';

// routing
import { AppRoutingModule } from './app-routing.module';

// modules
import { AuthModule } from "./modules/auth/auth.module"
import { FrameModule } from "./modules/frame/frame.module"

// pages
import { HomeComponent } from "./pages/home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    AuthModule,
    FrameModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
