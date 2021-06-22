import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScannerVistaPage } from './scanner-vista.page';

const routes: Routes = [
  {
    path: '',
    component: ScannerVistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScannerVistaPageRoutingModule {}
