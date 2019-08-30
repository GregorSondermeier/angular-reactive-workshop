import { Project } from './../../projects/project.model';
import { ProjectsActionTypes } from './projects.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export const initialProjects: Project[] = [
  {
    id: '1',
    title: 'Project One',
    details: 'This is a sample project',
    percentComplete: 20,
    approved: false,
    customerId: null
  },
  {
    id: '2',
    title: 'Project Two',
    details: 'This is a sample project',
    percentComplete: 40,
    approved: false,
    customerId: null
  },
  {
    id: '3',
    title: 'Project Three',
    details: 'This is a sample project',
    percentComplete: 100,
    approved: true,
    customerId: null
  }
];

const createProject = (projects, project) => [...projects, project];
const updateProject = (projects, project) => projects.map(p => {
  return p.id === project.id ? Object.assign({}, project) : p;
});
const deleteProject = (projects, project) => projects.filter(w => project.id !== w.id);

// 01 define the shape of the state
export interface ProjectsState extends EntityState<Project> {
  selectedProjectId: string | null;
}

// 02 create entity adapter
export const adapter: EntityAdapter<Project> = createEntityAdapter<Project>();

// 03 define the initial state
export const initialState: ProjectsState = adapter.getInitialState({
  selectedProjectId: null
});

// 04 build the MOST simplest reducer
export function projectsReducers(state = initialState, action): ProjectsState {
  switch(action.type) {
    case ProjectsActionTypes.LoadAll:
      return adapter.addMany(action.payload, state);
    case ProjectsActionTypes.Select:
      return Object.assign({}, state, { selectedProjectId: action.payload });
    case ProjectsActionTypes.Add:
      return adapter.addOne(action.payload, state);
    case ProjectsActionTypes.Update:
      return adapter.updateOne(action.payload, state);
    case ProjectsActionTypes.Delete:
      return adapter.removeOne(action.payload, state);
    default:
      return state;
  }
}
