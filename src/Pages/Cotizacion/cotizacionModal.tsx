import { Modal } from "flowbite-react";
import { useForm, FormProvider } from "react-hook-form";

import PageTitle from "@Components/PageTitle";
import InputText from "@Components/InputText";
import { Cotizacion, ModalProps } from "@Types/index";
import Button from "@Components/Button";

function CotizacionModal({
  openModal,
  onCloseModal,
  acction,
}: ModalProps) {
  const methods = useForm<Cotizacion>();

  function save(data: Cotizacion) {
    console.log("dataa", data);
  }

  console.log(methods.watch());
  return (
    <Modal show={openModal} size="4xl" onClose={onCloseModal} popup>
      <Modal.Header />
      <Modal.Body>
        <div className="h-auto w-auto">
          {acction === "create" && (
            <PageTitle>Nueva Cotizacion</PageTitle>
          )}
          {acction === "edit" && (
            <PageTitle>Modificar Cotizacion</PageTitle>
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

export default CotizacionModal;
