import { z } from "zod";

const cotizacionSchema = z.object({
  idTipoDocumento: z.string({
    required_error: "Seleccione el tipo de documento",
  }),

  nroDocumento: z.string().min(1, "Ingrese el número de documento"),
  nombrePaciente: z.string().min(1, "Ingrese el nombre del paciente"),
  apellidoPaciente: z
    .string()
    .min(1, "Ingrese el apellido del paciente"),
  //   idDoctor: zod.string().min(1, "selecs"),
  idDoctor: z.string({
    required_error: "Seleccione el doctor",
  }),
  //z.object({}).or(z.string())
  // .refine((idDoctor) => {
  //   if (idDoctor.value === "") {
  //     return false;
  //   }
  //   return true;
  // }),
});

export default cotizacionSchema;
