import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// External libs
import { TooltipModule } from 'ng2-tooltip-directive';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';

// NgRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MusicReducer } from '../app/reducer/music.reducer';
import { CurrentMusicReducer } from '../app/reducer/currentMusic.reducer';
import { MusicEffects } from './effect/music.effect';

// App modules, components
import { PipeModule } from './pipes/pipe.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { ClientComponent } from './components/client/client.component';

// App services
import { environment } from '../environments/environment'; // Angular CLI environment
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
    TooltipModule,
    AppRoutingModule,
    PipeModule
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
