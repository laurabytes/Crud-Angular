import { PremioEditarComponent } from './components/premio/premio-editar/premio.component';
import { Routes } from '@angular/router';
import { PremioComponent } from './components/premio/premio.component';
import { PremioVerComponent } from './components/premio/premio-ver/premio-ver.component';
import { PremioCriarComponent } from './components/premio/premio-criar/premio-criar.component';

export const routes: Routes = [
  {
    path: '',
    component: PremioComponent
  },
  {
    path: 'ver/:id',
    component: PremioVerComponent
  },
  {
    path: 'editar/:id',
    component: PremioEditarComponent
  },
  {
    path: 'criar',
    component: PremioCriarComponent
  }
];
