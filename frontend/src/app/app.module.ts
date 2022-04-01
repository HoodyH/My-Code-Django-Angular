import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// routing
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// modules
import { AuthModule } from "./modules/auth/auth.module"
import { FrameModule } from "./modules/frame/frame.module"

@NgModule({
  declarations: [
    AppComponent,
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
