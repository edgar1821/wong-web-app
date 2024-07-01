import { z } from "zod";

const userSchema = z
  .object({
    userId: z.string().optional(),
    name: z.string().min(1, "Ingrese el nombre completo"),
    email: z.string().email("Ingrese un email valido"),
    phoneNumber: z
      .string()
      .regex(
        /^\d{9}$/,
        "Ingrese valores numericos, número de telefono debe tener 9 digitos",
      ),
    password: z
      .string()
      .min(6, "La contraseña debe contener al menos 6 caracteres"),
    passwordVerified: z
      .string()
      .min(6, "La contraseña debe contener al menos 6 caracteres"),
    rol_id: z.string().min(1, "Seleccione un rol para el usuario"),
  })
  .refine((data) => data.password === data.passwordVerified, {
    message: "la contraseña no coincide",
    path: ["passwordVerified"],
  });
// .refine(
//       (val: string, ctx: { parent: { password: string } }) =>
//         val === ctx.parent.password,
//       {
//         message: "Passwords must match",
//         path: ["passwordVerified"],
//       },
//     ),
export default userSchema;
