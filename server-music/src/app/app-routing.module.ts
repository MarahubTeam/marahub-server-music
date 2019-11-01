import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ClientComponent } from './components/client/client.component';

const routes: Routes = [
  { path: 'client', component: ClientComponent },
  { path: 'admin', component: AdminComponent },
  { path: '',
    redirectTo: '/client',
    pathMatch: 'full'
  },
  { path: '**', component: ClientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
