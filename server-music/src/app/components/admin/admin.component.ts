import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as MusicActions from '../../action/music.action';
import * as CurrentMusicActions from '../../action/current.action';
import Music from '../../model/music.model';
import { SocketService } from '../../services/socket.service';

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
  url: string = '';

  constructor(private store: Store<Music[]>, private socketService: SocketService) {

  }

  ngOnInit() {
    this.musicList$ = this.store.pipe(select('musics'));
    this.currentMusicList$ = this.store.pipe(select('currentMusics'))

    this.currentMusicList$.subscribe((data) => {
      if (data.length === 1 && this.player) {
        this.player.loadVideoById(data[0].id);
      }
    });
    this.store.dispatch(CurrentMusicActions.ListCurrentMusicAction());
    this.socketService.listen('add-music')
      .subscribe((data) => {
        this.store.dispatch(CurrentMusicActions.ListCurrentMusicAction());
      });
    this.socketService.listen('next-music')
      .subscribe((data) => {
        this.store.dispatch(CurrentMusicActions.ListCurrentMusicAction());
        if (data.length > 0 && this.player) {
          this.player.loadVideoById(data[0].id);
        }
      });

    this.socketService.listen('remove-music')
      .subscribe((data) => {
        this.store.dispatch(CurrentMusicActions.ListCurrentMusicAction());
        if (data.length > 1 && this.player) {
          this.player.loadVideoById(data[0].id);
        }
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

  remove() {
    this.socketService.emit('remove-music');
  }

  next() {
    this.socketService.emit('next-music');
  }

  savePlayer(player: any) {
    this.player = player;
    this.currentMusicList$.subscribe((data) => {
      if (data.length === 1) {
        this.player.loadVideoById(data[0].id);
      }
    });
  }

  onStateChange(event: any) {
    if (event.data == 0) {
      this.remove();
    }
  }

}
