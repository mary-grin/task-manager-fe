import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardsComponent } from './boards.component';
import { BoardComponent } from './components/board/board.component';
import { BoardFormComponent } from './components/board-form/board-form.component';
import {RouterModule} from "@angular/router";
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskComponent } from './components/task/task.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TasksColumnComponent } from './components/tasks-column/tasks-column.component';
import {BoardsRoutingModule} from "./boards-routing.module";



@NgModule({
    declarations: [
        BoardsComponent,
        BoardComponent,
        BoardFormComponent,
        TasksComponent,
        TaskComponent,
        TaskFormComponent,
        TasksColumnComponent
    ],
    exports: [
        BoardComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        BoardsRoutingModule
    ]
})
export class BoardsModule { }
