import { Action } from '@ngrx/store';
import { Project } from '@workshop/core-data';

export enum ProjectsActionTypes {
  LoadAll = '[Projects] Load All',
  Select = '[Projects] Selected',
  Add = '[Projects] Add',
  Update = '[Projects] Update',
  Delete = '[Projects] Delete',
}

export class LoadAllProjects implements Action {
  readonly type = ProjectsActionTypes.LoadAll;
  constructor(private payload: Project[]) {}
}

export class SelectProject implements Action {
  readonly type = ProjectsActionTypes.Select;
  constructor(private payload: Project) {}
}

export class AddProject implements Action {
  readonly type = ProjectsActionTypes.Add;
  constructor(private payload: Project) {}
}

export class UpdateProject implements Action {
  readonly type = ProjectsActionTypes.Update;
  constructor(private payload: Project) {}
}

export class DeleteProject implements Action {
  readonly type = ProjectsActionTypes.Delete;
  constructor(private payload: Project) {}
}

export type ProjectsActions = LoadAllProjects | SelectProject | AddProject | UpdateProject | DeleteProject;
