import { IArtista } from "../interfaces/IArtista";
import { IMusica } from "../interfaces/IMusica";
import { IPlaylist } from "../interfaces/IPlaylist";

export function newArtista(): IArtista {
    return {
        id: '',
        nome: '',
        imagemUrl: '',
        musicas: []
    };
}

export function newMusica(): IMusica {
    return {
        id: '',
        album: {
            id: '',
            imagemUrl: '',
            nome: '',
        },
        artistas: [],
        tempo: '',
        titulo: ''
    };
}

export function newPlaylist(): IPlaylist {
    return {
        id: '',
        nome: '',
        imagemUrl: '',
        musicas: []
    };
}