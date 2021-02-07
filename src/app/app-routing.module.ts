import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ProjectsComponent } from './projects/projects/projects.component';
import { ContactMeComponent } from './contact/contact-me/contact-me.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'portfolio',
    component: ProjectsComponent,
    pathMatch: 'full',
  },
  {
    path: 'portfolio/:id',
    component: ProjectDetailsComponent,
    pathMatch: 'full',
  },
  {
    path: 'contact',
    component: ContactMeComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
