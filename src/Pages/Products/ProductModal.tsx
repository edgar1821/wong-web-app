import { Modal } from "flowbite-react";
import { useForm, FormProvider } from "react-hook-form";

import PageTitle from "@Components/PageTitle";
import InputText from "@Components/InputText";
import Wysiwyg from "@Components/Wysiwyg";
import { OperationAction, Product } from "@Types/index";
import Button from "@Components/Button";
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
  const methods = useForm<Product>();

  function save(data: Product) {
    console.log("dataa", data);
  }

  console.log(methods.watch());
  return (
    <Modal show={openModal} size="4xl" onClose={onCloseModal} popup>
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
                label="Producto"
                placeholder="Zapatos"
                errors={methods.formState.errors}
              />
              <Wysiwyg
                name="richTextContent"
                disable={false}
                label="Descripción"
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
