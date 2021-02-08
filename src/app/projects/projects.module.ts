import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectDetailsComponent } from './project-details/project-details.component';


@NgModule({
  declarations: [ProjectsComponent, ProjectDetailsComponent],
  exports: [ProjectsComponent],
  imports: [
  CommonModule,
    SharedModule
  ]
})
export class ProjectsModule { }
