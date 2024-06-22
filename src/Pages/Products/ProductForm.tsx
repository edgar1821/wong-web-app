import { useEffect } from "react";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import { IProduct } from "@Types/index";
// components
import Layout from "@Components/Layout";

import PageTitle from "@Components/PageTitle";
import { useProductStore } from "../../store/useProductStore";
import { FormProvider, useForm } from "react-hook-form";
import InputText from "@Components/InputText";
import SelectInput from "@Components/Select";
import WysiwygEditor from "@Components/Wysiwyg";
import Button from "@Components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { TOAST_TYPE } from "@Constants/action";

export const ProductSchema = z.object({
  product_id: z.string().optional(),
  product: z.string().min(1, "Product is required"),
  price: z
    .string()
    .min(1, "Price is required")
    .refine((val) => /^\d+(\.\d{1,2})?$/.test(val), {
      message:
        "Price must be a valid number with up to two decimal places",
    }),
  description: z.string().min(1, "Description is required"),
  currency_type_id: z.string().min(1, "Currency Type ID is required"),
});

function ProductsForm() {
  const params = useParams();
  const fetchCurrencyTypes = useProductStore(
    (state) => state.fetchCurrencyTypes,
  );
  const listCurrencyTypesOption = useProductStore(
    (state) => state.listCurrencyTypesOption,
  );
  const fetchSaveProduct = useProductStore(
    (state) => state.fetchSaveProduct,
  );

  const toastStore = useProductStore((state) => state.toast);
  const clearToast = useProductStore((state) => state.clearToast);
  const methods = useForm<IProduct>({
    resolver: zodResolver(ProductSchema),
  });
  function save(data: IProduct) {
    fetchSaveProduct(data);
  }
  useEffect(() => {
    fetchCurrencyTypes();
  }, [fetchCurrencyTypes]);
  useEffect(() => {
    if (toastStore.type === TOAST_TYPE.SUCCESS && toastStore.message) {
      toast.success(toastStore.message);
      methods.reset();
      setTimeout(() => {
        clearToast();
      }, 5000);
    }
    if (toastStore.type === TOAST_TYPE.ERROR && toastStore.message) {
      toast.error(toastStore.message);
      setTimeout(() => {
        clearToast();
      }, 5000);
    }
  }, [clearToast, methods, toastStore]);
  return (
    <Layout title="Nuevo producto">
      {params.accion && params.accion === "registro" && (
        <PageTitle>Nuevo Producto</PageTitle>
      )}

      <div className="overscroll-auto md:w-7/12">
        <div className="h-auto w-auto">
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(save)}
              className="flex flex-col"
            >
              <InputText
                name="product"
                type="text"
                label="Nombre del producto:"
                placeholder="Zapatos"
              />
              <SelectInput
                label="Tipo de moneda:"
                name="currency_type_id"
                options={listCurrencyTypesOption}
              />

              <InputText name="price" type="text" label="Precio" />
              <WysiwygEditor
                name="description"
                disable={false}
                label="Descripción"
                errors={methods.formState.errors}
              />
              <Button type="submit">Guardar</Button>
            </form>
          </FormProvider>
        </div>
      </div>
      <Toaster />
    </Layout>
  );
}

export default ProductsForm;
