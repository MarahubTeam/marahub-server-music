import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  url = '/api/';
  constructor(private http: HttpClient) { }

  search(text: string) {
    return this.http.get(`${this.url}search?q=${text}`);
  }

  getlist() {
    return this.http.get(`${this.url}list`);
  }

  getTrendingList() {
    return this.http.get(`${this.url}trending`);
  }

  addMusic(music: any) {
    return this.http.post(`${this.url}add`, music);
  }

  removeMusic() {
    return this.http.get(`${this.url}shift`);
  }
}
