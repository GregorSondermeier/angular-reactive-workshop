import {
  AddedProject,
  AddProject,
  LoadAllProjects,
  LoadedAllProjects,
  Project,
  ProjectsService,
  ProjectsState
} from '@workshop/core-data';
import { Injectable } from '@angular/core';
import { act, Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { ProjectsActionTypes } from './projects.actions';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ProjectsEffects {

  @Effect()
  loadProjects$ = this.dataPersistence.fetch(ProjectsActionTypes.LoadAll, {
    run: (action: LoadAllProjects, state: ProjectsState) => {
      return this.projectsService.all()
        .pipe(
          map((res: Project[]) => new LoadedAllProjects(res))
        )
    },
    onError: () => {}
  });

  @Effect()
  addProject$ = this.dataPersistence.pessimisticUpdate(ProjectsActionTypes.Add, {
    run: (action: AddProject, state: ProjectsState) => {
      return this.projectsService.create(action.payload)
        .pipe(
          map((res: Project) => new AddedProject(res))
        );
    },
    onError: () => {}
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<ProjectsState>,
    private projectsService: ProjectsService
  ) {};


}
