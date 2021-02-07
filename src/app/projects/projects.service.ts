import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPortfolioProject, PortfolioProject } from './projects/projects.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private projects: PortfolioProject[] = [];
  constructor(private http: HttpClient) {}

  getProjects(id?: number): Observable<PortfolioProject[]> {
    if (this.projects && this.projects.length > 0) {
      return id
        ? of(
            this.projects.filter(
              (project: PortfolioProject) => project.id === id
            )
          )
        : of(this.projects);
    }
    return this.http.get('assets/projects.json').pipe(
      map((response: any) => {
        const iProjects = (response as unknown) as IPortfolioProject[];
        this.projects = PortfolioProject.buildProjects(iProjects);
        return id
          ? this.projects.filter(
              (project: PortfolioProject) => project.id === id
            )
          : this.projects;
      })
    );
  }
}
