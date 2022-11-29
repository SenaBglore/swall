import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    BrowserAnimationsModule,
  ],
  declarations: [AppComponent, HelloComponent, TopbarComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
