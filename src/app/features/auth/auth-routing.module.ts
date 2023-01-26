import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from "./auth.component";
import {SignUpFormComponent} from "./components/sign-up-form/sign-up-form.component";
import {SignInFormComponent} from "./components/sign-in-form/sign-in-form.component";

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'sign-in', pathMatch: "full" },
      { path: 'sign-up', component: SignUpFormComponent },
      { path: 'sign-in', component: SignInFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
