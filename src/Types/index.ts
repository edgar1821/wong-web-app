// export * from "./entities";
export * from "./AuthUser";
export interface IOption {
  value: string;
  label: string;
}

export interface LoginForm {
  email: string;
  password: string;
}

export interface TypeCurrency {
  currency_type_id: string;
  currency_type: string;
}
export interface IProduct {
  product_id?: string;
  product: string;
  price: number;
  description: string;
  currency_type_id: string;
}

export interface Doctor {
  idDoctor?: string;
  doctorName: string;
  intitution: string;
  speciallity: string;
  phoneNumber?: string;
  email?: string;
}
export interface Rol {
  role_id: string;
  role_name: string;
  user_screen: boolean;
  doctor_screen: boolean;
  price_quote_screen: boolean;
  update_user_password: boolean;
}
export interface User {
  userId?: string;
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  passwordVerified: string;
  rol_id: string;
}
export interface Cotizacion {
  idCotizacion?: number;
  idTipoDocumento: number;
  nroDocumento: string;

  idDoctor: string;
  // medico: Doctor;
  nombrePaciente: string;
  apellidoPaciente: string;
  fechaEmision: string;
  fechaCaducidad: string;
  idProduct: string;
}

// suport
export type OperationAction = "edit" | "create" | "delete";

// components
export interface ModalProps {
  openModal: boolean;
  onCloseModal: () => void;
  acction: OperationAction;
}
