import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BoardsComponent} from "./boards.component";
import {BoardFormComponent} from "./components/board-form/board-form.component";
import {TasksComponent} from "./components/tasks/tasks.component";
import {TaskFormComponent} from "./components/task-form/task-form.component";

const routes: Routes = [
  {
    path: '',
    component: BoardsComponent,
    children: [
      { path: 'new', component: BoardFormComponent },
      { path: ':id', component: TasksComponent },
      { path: ':id/edit', component: BoardFormComponent },
      { path: ':id/new', component: TaskFormComponent },
      { path: ':id/:idTask/edit', component: TaskFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardsRoutingModule { }
