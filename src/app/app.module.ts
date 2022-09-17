import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StopWatchComponent } from './stop-watch/stop-watch.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './detail/detail.component';
@NgModule({
  declarations: [AppComponent, HomeComponent, DetailComponent],
  imports: [
    HttpClientModule,
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
