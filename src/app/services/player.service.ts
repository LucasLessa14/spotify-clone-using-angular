import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { newMusica } from '../common/factories';
import { IMusica } from '../interfaces/IMusica';
import { SpotifyService } from './spotify.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  musicaAtual = new BehaviorSubject<IMusica>(newMusica());
  timerId: any = null;
  
  constructor(private spotifyService: SpotifyService) {
    this.obterMusicaAtual();
  }

  async obterMusicaAtual() {
    clearTimeout(this.timerId);

    // obtenho a musica do spotify
    const musica = await this.spotifyService.obterMusicaAtual();
    this.musicaAtual.next(musica);

    // crio um loop
    this.timerId = setInterval(async () => {
      await this.obterMusicaAtual();
    }, 3000);
  }

  definirMusicaAtual(musica: IMusica) {
    this.musicaAtual.next(musica);
  }

  async voltarMusica() {
    await this.spotifyService.voltarMusica();
  }

  async proximaMusica() {
    await this.spotifyService.proximaMusica();
  }
}
