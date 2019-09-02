import { Action } from '@ngrx/store';
import { Project } from '@workshop/core-data';

export enum ProjectsActionTypes {
  LoadAll = '[Projects] Load All',
  LoadedAll = '[Projects] Loaded All',
  Select = '[Projects] Selected',
  Add = '[Projects] Add',
  Added = '[Projects] Added',
  Update = '[Projects] Update',
  Delete = '[Projects] Delete',
}

export class LoadAllProjects implements Action {
  readonly type = ProjectsActionTypes.LoadAll;
  // no payload here
}

export class LoadedAllProjects implements Action {
  readonly type = ProjectsActionTypes.LoadedAll;
  constructor(public payload: Project[]) {}
}

export class SelectProject implements Action {
  readonly type = ProjectsActionTypes.Select;
  constructor(public payload: Project) {}
}

export class AddProject implements Action {
  readonly type = ProjectsActionTypes.Add;
  constructor(public payload: Project) {}
}

export class AddedProject implements Action {
  readonly type = ProjectsActionTypes.Added;
  constructor(public payload: Project) {}
}

export class UpdateProject implements Action {
  readonly type = ProjectsActionTypes.Update;
  constructor(public payload: Project) {}
}

export class DeleteProject implements Action {
  readonly type = ProjectsActionTypes.Delete;
  constructor(public payload: Project) {}
}

export type ProjectsActions = LoadAllProjects | LoadedAllProjects | SelectProject | AddProject | AddedProject | UpdateProject | DeleteProject;
