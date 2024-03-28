export interface LoginForm {
  email: string;
  password: string;
}

export interface Product {
  id?: number;
  name: string;
  description: string;
}

// suport
export type OperationAction = "edit" | "create" | "delete";
