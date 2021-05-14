import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteInitPage } from './cliente-init.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteInitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteInitPageRoutingModule {}
