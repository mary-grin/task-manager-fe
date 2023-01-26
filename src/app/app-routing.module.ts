import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import("./features/auth/auth.module").then(m => m.AuthModule)},
  { path: 'boards', loadChildren: () => import("./features/boards/boards.module").then(m => m.BoardsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
