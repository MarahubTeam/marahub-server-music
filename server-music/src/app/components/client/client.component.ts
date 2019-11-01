import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as MusicActions from '../../action/music.action';
import * as CurrentMusicActions from '../../action/current.action';
import Music from '../../model/music.model';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  musicList$: Observable<Music[]>;
  currentMusicList$: Observable<Music[]>;
  music: string;
  url: string = '';

  constructor(private store: Store<Music[]>, private socketService: SocketService) {
  }

  ngOnInit() {
    this.musicList$ = this.store.pipe(select('musics'));
    this.currentMusicList$ = this.store.pipe(select('currentMusics'))

    this.store.dispatch(CurrentMusicActions.ListCurrentMusicAction());
    this.socketService.listen('add-music')
      .subscribe(() => {
        this.store.dispatch(CurrentMusicActions.ListCurrentMusicAction());
      });
    this.socketService.listen('next-music')
      .subscribe(() => {
        this.store.dispatch(CurrentMusicActions.ListCurrentMusicAction());
      });

    this.socketService.listen('remove-music')
      .subscribe(() => {
        this.store.dispatch(CurrentMusicActions.ListCurrentMusicAction());
      });
  }

  add(music: Music) {
    this.socketService.emit('add-music', music);
  }

  next() {
    this.socketService.emit('next-music');
  }

  remove(i: any) {
    this.socketService.emit('remove-music', i);
  }

  search() {
    if (!this.music) {
      return;
    }
    this.store.dispatch(MusicActions.GetMusicAction({ id: this.music }));
  }
}
