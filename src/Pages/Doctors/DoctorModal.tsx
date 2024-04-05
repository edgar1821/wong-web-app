import { Modal } from "flowbite-react";
import { useForm, FormProvider } from "react-hook-form";

import PageTitle from "@Components/PageTitle";
import InputText from "@Components/InputText";
import { Doctor, ModalProps } from "@Types/index";
import Button from "@Components/Button";

function ProductModal({
  openModal,
  onCloseModal,
  acction,
}: ModalProps) {
  const methods = useForm<Doctor>();

  function save(data: Doctor) {
    console.log("dataa", data);
  }

  console.log(methods.watch());
  return (
    <Modal show={openModal} size="4xl" onClose={onCloseModal} popup>
      <Modal.Header />
      <Modal.Body>
        <div className="h-auto w-auto">
          {acction === "create" && <PageTitle>Nuevo Doctor</PageTitle>}
          {acction === "edit" && (
            <PageTitle>Modificar Doctor</PageTitle>
          )}

          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(save)}
              className="flex flex-col"
            >
              <InputText
                name="name"
                type="text"
                label="Doctor"
                placeholder="Zapatos"
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
