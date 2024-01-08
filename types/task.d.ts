export interface TaskDetails {
    id: string;
    title: string;
    description: string;
    status: 'open' | 'pending' | 'completed' | 'closed';
    user: string;
    manager: string;
  }