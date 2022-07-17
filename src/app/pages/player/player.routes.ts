import { Routes } from '@angular/router';
import { ListaMusicaComponent } from 'src/app/pages/lista-musica/lista-musica.component';
import { HomeComponent } from '../home/home.component';
import { PlayerComponent } from './player.component';

export const PlayerRotas: Routes = [
    {
        path: '',
        component: PlayerComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent
            },{
                path: 'lista/:tipo/:id',
                component: ListaMusicaComponent
            }
        ]
    }
]