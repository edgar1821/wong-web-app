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
    <Modal show={openModal} size="xl" onClose={onCloseModal} popup>
      <Modal.Header />
      <Modal.Body>
        <div className="space-y-6">
          {acction === "create" && (
            <PageTitle>Nuevo Producto</PageTitle>
          )}
          {acction === "edit" && (
            <PageTitle>Modificar Producto</PageTitle>
          )}

          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(save)}>
              <InputText
                name="name"
                type="text"
                label="Producto"
                placeholder="Zapatos"
                errors={methods.formState.errors}
                register={methods.register}
              />
              <Wysiwyg
                name="richTextContent"
                disable={false}
                label="Descripción"
              />
              <Button type="submit">guardar</Button>
            </form>
          </FormProvider>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ProductModal;
