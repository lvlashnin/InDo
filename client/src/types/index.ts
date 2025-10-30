export type Status = "todo" | "in-progress" | "done";

export interface Todo {
  _id: string;
  title: string;
  description: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}
