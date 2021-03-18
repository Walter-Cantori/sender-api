export interface IProject {
  name: string;
  parentProject: string;
  variables: Record<string, unknown>;
}
