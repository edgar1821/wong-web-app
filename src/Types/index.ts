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
export interface User {
  id?: number;
  name: string;
  lastName: string;
  rol: number;
  email: string;
  password: string;
  passwordVerified: string;
}
export interface Cotizacion {
  id?: number;
  clienteRuc: string;
  paciente: string;
  medico: Doctor;
  fechaEmision: Date;
  producto: Product;
}
// suport
export type OperationAction = "edit" | "create" | "delete";

// components
export interface ModalProps {
  openModal: boolean;
  onCloseModal: () => void;
  acction: OperationAction;
}
