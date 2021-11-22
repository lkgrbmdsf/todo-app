export interface Todo {
  title: string;
  description: string;
  isShown?: boolean;
  isDone: boolean;
  deadlineDate: Date;
}
