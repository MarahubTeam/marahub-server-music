import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { MusicReducer } from '../app/reducer/music.reducer';
import { CurrentMusicReducer } from '../app/reducer/currentMusic.reducer';
import { AdminComponent } from './components/admin/admin.component';
import { ClientComponent } from './components/client/client.component';
import { EffectsModule } from '@ngrx/effects';
import { MusicEffects } from './effect/music.effect';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environment
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { SocketService } from './services/socket.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ClientComponent
  ],
  imports: [
    NgxYoutubePlayerModule.forRoot(),
    HttpClientModule,
    FormsModule,
    BrowserModule,
    StoreModule.forRoot({ musics: MusicReducer, currentMusics: CurrentMusicReducer }),
    EffectsModule.forRoot([MusicEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    AppRoutingModule
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
