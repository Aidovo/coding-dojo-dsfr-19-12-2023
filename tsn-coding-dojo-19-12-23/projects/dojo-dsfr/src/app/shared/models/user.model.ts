import { Roles } from './roles.model';

export interface User {
  id: number;
  name: string;
  password: string;
  role: Roles;
}
