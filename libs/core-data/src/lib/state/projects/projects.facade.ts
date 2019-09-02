import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {
  AddProject,
  DeleteProject,
  LoadAllProjects,
  Project,
  ProjectsState,
  selectAllProjects,
  selectCurrentProject,
  SelectProject,
  UpdateProject
} from '@workshop/core-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsFacade {
  projects$: Observable<Project[]>;
  currentProject$: Observable<Project>;

  constructor(
    private store: Store<ProjectsState>
  ) {
    this.projects$ = store.pipe(select(selectAllProjects));
    this.currentProject$ = store.pipe(select(selectCurrentProject));
  }

  resetCurrentProject() {
    this.store.dispatch(new SelectProject(null));
  }

  selectProject(project) {
    this.store.dispatch(new SelectProject(project.id));
  }

  getProjects() {
    this.store.dispatch(new LoadAllProjects());
  }

  createProject(project) {
    this.store.dispatch(new AddProject(project));
  }

  updateProject(project) {
    this.store.dispatch(new UpdateProject(project));
  }

  deleteProject(project) {
    this.store.dispatch(new DeleteProject(project));
  }
}
