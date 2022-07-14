import { addMilliseconds, format } from "date-fns";
import { IArtista } from "../interfaces/IArtista";
import { IMusica } from "../interfaces/IMusica";
import { IPlaylist } from "../interfaces/IPlaylist";
import { IUsuario } from "../interfaces/IUsuario";

export function SpotifyUserParaUsuario(user: SpotifyApi.CurrentUsersProfileResponse): IUsuario {
    return {
        id: user.id,
        nome: user.display_name,
        imagemUrl: user.images.pop().url
    }
}

export function SpotifyPlaylistParaPlaylist(playlist: SpotifyApi.PlaylistObjectSimplified): IPlaylist {
    return {
        id: playlist.id,
        nome: playlist.name,
        imagemUrl: 'playlist.images.pop().url'
    }
}

export function SpotifyArtistaParaArtista(artista: SpotifyApi.ArtistObjectFull): IArtista {
    return {
        id: artista.id,
        nome: artista.name,
        imagemUrl: artista.images.sort((a,b) => a.width - b.width).pop().url
    }
}

export function SpotifyTrackParaMusica(spotifyTrack: SpotifyApi.TrackObjectFull): IMusica {
    const msParaMinutos = (ms: number) => {
        const data = addMilliseconds(new Date(0), ms)
        return format(data, 'mm:ss');
    }
    
    return {
        id: spotifyTrack.uri,
        album: {
            id: spotifyTrack.album.id,
            imagemUrl: spotifyTrack.album.images.shift().url,
            nome: spotifyTrack.album.name,
        },
        artistas: spotifyTrack.artists.map(artist => ({
            id: artist.id,
            nome: artist.name
        })),
        tempo: msParaMinutos(spotifyTrack.duration_ms),
        titulo: spotifyTrack.name
    }
}