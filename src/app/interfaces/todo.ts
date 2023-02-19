export interface Todo {
  todos: Array<Type>;
}
export interface Type {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}
