import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as MusicActions from '../../action/music.action';
import * as CurrentMusicActions from '../../action/current.action';
import Music from '../../model/music.model';

import { SocketService } from '../../services/socket.service';
import { MusicService } from '../../services/music.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  musicList$: Observable<Music[]>;
  currentMusicList$: Observable<Music[]>;

  music: string;
  player: YT.Player;
  url = '';
  isPlaying = false;

  constructor(
    private store: Store<Music[]>,
    private socketService: SocketService,
    private musicService: MusicService,
  ) { }

  ngOnInit() {
    this.musicList$ = this.store.pipe(select('musics'));
    this.currentMusicList$ = this.store.pipe(select('currentMusics'));

    this.store.dispatch(CurrentMusicActions.ListCurrentMusicAction());

    this.socketService.listen('add-music')
      .subscribe(() => {
        this.store.dispatch(CurrentMusicActions.ListCurrentMusicAction());
      });

    this.socketService.listen('next-music')
      .subscribe(() => {
        this.isPlaying = false;
        this.store.dispatch(CurrentMusicActions.ListCurrentMusicAction());
      });

    this.socketService.listen('remove-music')
      .subscribe(() => {
        this.store.dispatch(CurrentMusicActions.ListCurrentMusicAction());
      });

    this.socketService.listen('clear-music')
      .subscribe(() => {
        this.store.dispatch(CurrentMusicActions.ListCurrentMusicAction());
      });
  }

  add(music: Music) {
    this.socketService.emit('add-music', music);
  }

  search() {
    if (!this.music) {
      return;
    }
    this.store.dispatch(MusicActions.GetMusicAction({ id: this.music }));
  }

  remove(i: any) {
    this.socketService.emit('remove-music', i);
  }

  next() {
    this.socketService.emit('next-music');
  }

  clearAll() {
    this.isPlaying = false;

    if (this.player) {
      this.player.loadVideoById('');
    }

    this.socketService.emit('clear-music');
  }

  savePlayer(player: any) {
    this.player = player;

    this.currentMusicList$.subscribe((data) => {
      if (data.length > 0 && this.player && !this.isPlaying) {
        this.player.loadVideoById(data[0].id);
        this.isPlaying = true;

        this.musicService.addFrequentSong(data[0]).subscribe();
      }
    });
  }

  onStateChange(event: any) {
    // When the video ends, we should move to next video
    if (event.data === 0) {
      this.isPlaying = false;
      this.next();
    }
  }

}
