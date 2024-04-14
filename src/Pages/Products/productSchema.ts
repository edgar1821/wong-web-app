import * as yup from "yup";

const productSchema = yup.object().shape({
  name: yup.string().required("Ingrese el nombre del producto"),
  idTypeCurrency: yup.string().required("ingrese el tipo de moneda"),
  price: yup.string().required("Ingrese el precio"),
  description: yup
    .string()
    .required("Ingrese la descripción del producto"),
});

export default productSchema;
