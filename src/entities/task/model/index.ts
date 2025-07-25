export interface ITask {
  id: string;
  title: string;
  description?: string;
  category: string;
  status: string;
  priority: string;
  date: string;
};

export const EMPTY_TASK = {
    id: "",
    title: "",
    description: "",
    category: "",
    status: "",
    priority: "",
    date: "",
};
