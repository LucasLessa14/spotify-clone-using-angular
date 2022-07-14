import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faGuitar, faHome, faMusic, faSearch } from '@fortawesome/free-solid-svg-icons';
import { IPlaylist } from 'src/app/interfaces/IPlaylist';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-painel-esquerdo',
  templateUrl: './painel-esquerdo.component.html',
  styleUrls: ['./painel-esquerdo.component.scss']
})
export class PainelEsquerdoComponent implements OnInit {

  menuSelecionado = 'Home';

  playlists: IPlaylist[] = [];

  homeIcone = faHome;
  pesquisarIcone = faSearch;
  artistaIcone = faGuitar;
  playlistIcone = faMusic;

  constructor(
    private spotifyService: SpotifyService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buscarPlaylists();
  }

  botaoClick(botao: string) {
    this.menuSelecionado = botao;
    this.router.navigateByUrl('player/home');
  }

  async buscarPlaylists() {
    this.playlists = await this.spotifyService.buscarPlaylistUsuario();
  }
}
