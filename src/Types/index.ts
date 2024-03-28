export interface LoginForm {
  email: string;
  password: string;
}

export interface Product {
  id?: number;
  name: string;
  description: string;
}

export interface Doctor {
  id?: number;
  name: string;
}

// suport
export type OperationAction = "edit" | "create" | "delete";

// components
export interface ModalProps {
  openModal: boolean;
  onCloseModal: () => void;
  acction: OperationAction;
}
