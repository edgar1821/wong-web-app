import { Modal } from "flowbite-react";
import { useForm, FormProvider } from "react-hook-form";

import PageTitle from "@Components/PageTitle";
import InputText from "@Components/InputText";
import Select from "@Components/Select";
import DatePicker from "@Components/Datepicker";
import { Cotizacion, ModalProps } from "@Types/index";
import Button from "@Components/Button";

//helpers
import { getDates } from "../../helpers";

function CotizacionModal({
  openModal,
  onCloseModal,
  acction,
}: ModalProps) {
  const methods = useForm<Cotizacion>({
    defaultValues: {
      fechaEmision: getDates(),
      fechaCaducidad: getDates(10),
    },
  });

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
              <input
                type="hidden"
                {...methods.register("idCotizacion")}
              />
              <Select
                label="Tipo de documento:"
                name="idTipoDocumento"
                options={[
                  { value: "1", label: "DNI" },
                  { value: "2", label: "RUC" },
                  { value: "3", label: "Carnet de extrangeria" },
                ]}
              />
              <InputText
                name="nroDocumento"
                type="text"
                label="Nro de documento:"
                placeholder=""
                errors={methods.formState.errors}
              />
              <InputText
                name="nombrePaciente"
                type="text"
                label="Nombres Paciente:"
                placeholder=""
                errors={methods.formState.errors}
              />
              <InputText
                name="apellidoPaciente"
                type="text"
                label="Apellidos del Paciente:"
                placeholder=""
                errors={methods.formState.errors}
              />
              <DatePicker
                name="fechaEmision"
                label="Fecha de emisión:"
              />
              <DatePicker
                name="fechaCaducidad"
                label="Fecha de emisión:"
              />
              <Select
                label="Producto"
                name="productos"
                options={[
                  { value: "zapato", label: "Zapato" },
                  { value: "silla", label: "Silla" },
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
