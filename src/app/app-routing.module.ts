import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HorasExtrasComponent } from './pages/horas-extras/horas-extras.component';
import { OrdenesDeCompraComponent } from './pages/ordenes-de-compra/ordenes-de-compra.component';

const routes: Routes = [
  { path: '', redirectTo: '/horas-extras', pathMatch: 'full' },
  {
    path: 'horas-extras',
    component: HorasExtrasComponent,
  },
  {
    path: 'ordenes-de-compra',
    component: OrdenesDeCompraComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
