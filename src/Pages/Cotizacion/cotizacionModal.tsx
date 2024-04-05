import { Modal } from "flowbite-react";
import { useForm, FormProvider } from "react-hook-form";

import PageTitle from "@Components/PageTitle";
import InputText from "@Components/InputText";
import Select from "@Components/Select";
import DatePicker from "@Components/Datepicker";
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
        <div className="min-h-96 w-auto">
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
              <input type="hidden" {...methods.register("id")} />
              <InputText
                name="clienteRuc"
                type="text"
                label="Ruc del cliente (*)"
                placeholder=""
                errors={methods.formState.errors}
              />
              <InputText
                name="paciente"
                type="text"
                label="Paciente"
                placeholder=""
                errors={methods.formState.errors}
              />
              <DatePicker
                name="fechaEmision"
                label="Fecha de emisión:"
              />
              <Select
                label="Producto"
                name="productos"
                options={[
                  { value: "red", label: "rojo" },
                  { value: "verde", label: "verde" },
                ]}
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
