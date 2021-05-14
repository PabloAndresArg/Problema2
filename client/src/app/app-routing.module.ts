import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'modalrespuestas',
    loadChildren: () => import('./pages/modalrespuestas/modalrespuestas.module').then( m => m.ModalrespuestasPageModule)
  },
  {
    path: 'cliente-init',
    loadChildren: () => import('./pages/cliente-init/cliente-init.module').then( m => m.ClienteInitPageModule)
  },
  {
    path: 'cuestionario/:id/:encuesta',
    loadChildren: () => import('./pages/cuestionario/cuestionario.module').then( m => m.CuestionarioPageModule)
  },
  {
    path: 'modal-cliente',
    loadChildren: () => import('./pages/modal-cliente/modal-cliente.module').then( m => m.ModalClientePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
