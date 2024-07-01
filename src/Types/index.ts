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
  currency_type?: TypeCurrency;
}

export interface IDoctor {
  doctor_id?: string;
  doctor_name: string;
  institution: string;
  spaciallity: string;
  phone_number?: string;
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
export interface IDocumentType {
  document_type_id: string;
  document_name: string;
}
export interface IProforma {
  proforma_id?: string;
  document_type_id: string;
  document_number: string;
  patient_name: string;
  patient_lastname: string;
  doctor_id: string;
  // medico: Doctor;
  currency_type_id: string;
  price: string;
  description: string;
  issue_date: string;
  expiration_date: string;
}

// suport
export type OperationAction = "edit" | "create" | "delete";

// components
export interface ModalProps {
  openModal: boolean;
  onCloseModal: () => void;
  acction: OperationAction;
}

export interface IToast {
  type: string;
  message: string;
}
