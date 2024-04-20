import * as zod from "zod";
const DoctorSchema = zod.object({
  doctorName: zod
    .string()
    .min(1, "Debe ingresar el nombre del doctor"),
  intitution: zod
    .string()
    .min(1, "Debe ingresar el nombre de la institucíon"),
  speciallity: zod.string().min(1, "Debe ingresar la especialidad"),
  phoneNumber: zod
    .string()
    .length(9, "Debe contener 9 caracteres")
    .regex(/^\d+$/, "Número no valido, debe ingresar solo números"),
  // .optional(),
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
