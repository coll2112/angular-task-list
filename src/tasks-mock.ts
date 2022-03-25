export interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
  description?: string;
}

export const TASKS: Task[] = [
  {
    id: 1,
    title: 'Clean House',
    description: 'Remember to do laundry too',
    isCompleted: false,
  },
  {
    id: 2,
    title: 'Clean Garage',
    description: 'Blow out leaves',
    isCompleted: false,
  },
  { id: 3, title: 'Make Dinner', description: '', isCompleted: false },
];
