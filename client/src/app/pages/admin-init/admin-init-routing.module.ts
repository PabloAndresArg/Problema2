import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminInitPage } from './admin-init.page';

const routes: Routes = [
  {
    path: '',
    component: AdminInitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminInitPageRoutingModule {}
