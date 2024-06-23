import { z } from "zod";

const DoctorSchema = z.object({
  doctor_name: z.string().min(1, "Debe ingresar el nombre del doctor"),
  intitution: z
    .string()
    .min(1, "Debe ingresar el nombre de la institucíon"),
  spaciallity: z.string().min(1, "Debe ingresar la especialidad"),
  phone_number: z
    .string()

    .refine(
      (phone_number) => {
        // si es falso se dispara la validacion
        let result = false;
        if (phone_number === "") {
          result = true;
          return result;
        }
        return /^\d{9}$/.test(phone_number);
      },
      {
        message: "Debe ser un valor numerico de 9 digitos",
      },
    ),
  email: z.string().refine(
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
