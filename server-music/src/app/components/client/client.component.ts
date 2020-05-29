import { Component, OnInit, OnDestroy } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import * as MusicActions from '../../action/music.action';
import * as CurrentMusicActions from '../../action/current.action';
import Music from '../../model/music.model';

import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit, OnDestroy {
  musicSub: Subscription;

  musicList$: Observable<Music[]>;
  currentMusicList: Music[] = [];

  music: string;
  url = '';

  constructor(
    private store: Store<Music[]>,
    private socketService: SocketService
  ) { }

  ngOnInit() {
    this.musicList$ = this.store.pipe(select('musics'));

    this.musicSub = this.store.pipe(select('currentMusics')).subscribe(
      (data: Music[]) => {
        this.currentMusicList = data;
      }
    );

    // Get list trending music (by default)
    this.getTrending();

    // Get list current music
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

    this.socketService.listen('clear-music')
      .subscribe(() => {
        this.store.dispatch(CurrentMusicActions.ListCurrentMusicAction());
      });
  }

  ngOnDestroy() {
    this.musicSub.unsubscribe();
  }

  /******************************/

  add(music: Music) {
    if (!this.currentMusicList.some(curr => curr.id === music.id)) {
      this.socketService.emit('add-music', music);
    }
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

  getTrending() {
    this.store.dispatch(MusicActions.GetTrendingAction());
  }

  getFrequentList() {
    this.store.dispatch(MusicActions.GetFrequentListAction());
  }
}
