export interface TypeCurrency {
  idTypeCurrency: number;
  TypeCurrecy: string;
}
export interface Product {
  idProduct?: string;
  name: string;
  price: string;
  idTypeCurrency: string;
  description: string;
}

export interface Doctor {
  idDoctor?: string;
  doctorName: string;
  intitution: string;
  speciallity: string;
  phoneNumber?: string;
  email?: string;
}
export interface User {
  idUser?: number;
  name: string;
  lastName: string;
  rol: number;
  email: string;
  password: string;
  passwordVerified: string;
}
export interface Cotizacion {
  idCotizacion?: number;
  idTipoDocumento: number;
  nroDocumento: number;
  idMedico: number;
  medico: Doctor;
  nombrePaciente: string;
  apellidoPaciente: string;
  fechaEmision: string;
  fechaCaducidad: string;
  producto: Product;
}
