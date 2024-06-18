import { useEffect } from "react";
import { Modal } from "flowbite-react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PageTitle from "@Components/PageTitle";
import InputText from "@Components/InputText";
import Wysiwyg from "@Components/Wysiwyg";
import { OperationAction, IProduct } from "@Types/index";
import Button from "@Components/Button";
import SelectInput from "@Components/Select";

// helpers
import ProductSchema from "./productSchema";
import { useProductStore } from "../../store/useProductStore";

interface ProductModalProps {
  openModal: boolean;
  onCloseModal: () => void;
  acction: OperationAction;
}
function ProductModal({
  openModal,
  onCloseModal,
  acction,
}: ProductModalProps) {
  const fetchCurrencyTypes = useProductStore(
    (state) => state.fetchCurrencyTypes,
  );
  const listCurrencyTypesOption = useProductStore(
    (state) => state.listCurrencyTypesOption,
  );
  const methods = useForm<IProduct>({
    // resolver: yupResolver(ProductSchema),
  });

  function save(data: IProduct) {
    console.log("dataa", data);
  }

  console.log("listCurrencyTypesOption", listCurrencyTypesOption);
  useEffect(() => {
    fetchCurrencyTypes();
  }, [fetchCurrencyTypes]);
  return (
    <Modal
      show={openModal}
      size="4xl"
      onClose={() => {
        methods.reset();
        onCloseModal();
      }}
      popup
    >
      <Modal.Header />
      <Modal.Body>
        <div className="h-auto w-auto">
          {acction === "create" && (
            <PageTitle>Nuevo Producto</PageTitle>
          )}
          {acction === "edit" && (
            <PageTitle>Modificar Producto</PageTitle>
          )}

          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(save)}
              className="flex flex-col"
            >
              <InputText
                name="name"
                type="text"
                label="Nombre del producto:"
                placeholder="Zapatos"
              />
              <SelectInput
                label="Tipo de moneda:"
                name="idTypeCurrency"
                // errors={methods.formState.errors}
                options={listCurrencyTypesOption}
              />

              <InputText name="price" type="text" label="Precio" />
              <Wysiwyg
                name="description"
                disable={false}
                label="Descripción"
                errors={methods.formState.errors}
              />
              <Button type="submit">Guardar</Button>
            </form>
          </FormProvider>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ProductModal;
