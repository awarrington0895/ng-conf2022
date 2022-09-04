import { Task } from "./task";

export interface Checklist {
    id: string;
    name: string;
    tasks: Task[];
}