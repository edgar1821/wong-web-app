export * from "./entities";
export interface Option {
  value: string;
  label: string;
}

export interface LoginForm {
  email: string;
  password: string;
}

// suport
export type OperationAction = "edit" | "create" | "delete";

// components
export interface ModalProps {
  openModal: boolean;
  onCloseModal: () => void;
  acction: OperationAction;
}
