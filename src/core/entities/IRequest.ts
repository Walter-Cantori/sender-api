export interface IRequests {
  verb: string;
  body: Record<string, unknown>;
  params: Record<string, unknown>;
  headers: Record<string, unknown>;
}
