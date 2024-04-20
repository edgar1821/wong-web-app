import * as zod from "zod";
import { Doctor } from "@Types/index";

const DoctorSchema: zod.ZodSchema<Doctor> = zod.object({
  doctorName: zod
    .string()
    .min(1, "Debe ingresar el nombre del doctor"),
  intitution: zod
    .string()
    .min(1, "Debe ingresar el nombre de la institucíon"),
  speciallity: zod.string().min(1, "Debe ingresar la especialidad"),
  phoneNumber: zod
    .string()

    .refine(
      (phoneNumber) => {
        // si es falso se dispara la validacion
        let result = false;
        if (phoneNumber === "") {
          result = true;
          return result;
        }
        return /^\d{9}$/.test(phoneNumber);
      },
      {
        message: "Debe ser un valor numerico de 9 digitos",
      },
    ),
  email: zod.string().refine(
    (email) => {
      // validacion no obligatoria de un email
      if (email === "") return true;
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
    {
      message: "email no valido",
    },
  ),
});

export default DoctorSchema;

// idDoctor: yup.string(),
//   doctorName: yup.string().required("Ingrese el nombre del doctor"),
//   intitution: yup
//     .string()
//     .required("ingrese el nombre de la institución"),
//   speciallity: yup
//     .string()
//     .required("ingrese la especialidad especialidad"),
//   phone: yup.string().required("ingrese la especialidad especialidad"),
//   email: yup.string().required("ingrese la especialidad especialidad"),
