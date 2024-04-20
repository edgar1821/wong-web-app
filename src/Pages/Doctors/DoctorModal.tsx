import { Modal } from "flowbite-react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PageTitle from "@Components/PageTitle";
import InputText from "@Components/InputText";
import { Doctor, ModalProps } from "@Types/index";
import Button from "@Components/Button";
// import { useShallow } from "zustand/react/shallow";

//logica
import DoctorSchema from "./doctorSchema";

function ProductModal({
  openModal,
  onCloseModal,
  acction,
}: ModalProps) {
  const methods = useForm<Doctor>({
    resolver: zodResolver(DoctorSchema),
  });

  function save(data: Doctor) {
    console.log("dataa", data);
  }

  // console.log(methods.watch());
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
              {/* <input type="hidden" name="idDoctor" /> */}
              <InputText
                name="doctorName"
                type="text"
                label="Nombre del doctor"
                errors={methods.formState.errors}
              />
              <InputText
                name="intitution"
                type="text"
                label="Nombre de la intitutión:"
                placeholder="Clinica Javier Prado"
                errors={methods.formState.errors}
              />
              <InputText
                name="speciallity"
                type="text"
                label="Especialidad:"
                placeholder="Especialidad"
                errors={methods.formState.errors}
              />
              <InputText
                name="phoneNumber"
                type="text"
                label="Telefono:"
                errors={methods.formState.errors}
              />
              <InputText
                name="email"
                type="text"
                label="Email:"
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
