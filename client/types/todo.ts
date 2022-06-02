
export interface Todo {
  id:number;
  content: string;
  done: boolean;
}

export interface Todos {
  todos: Todo[]
}

export enum MutationsEnum {
  ADD_TODO = "ADD_TODO",
  REMOVE_TODO = "REMOVE_TODO",
  TOGGLE_TODO = "TOGGLE_TODO",
}