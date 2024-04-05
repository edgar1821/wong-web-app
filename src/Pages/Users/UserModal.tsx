import { Modal } from "flowbite-react";
import { useForm, FormProvider } from "react-hook-form";

import PageTitle from "@Components/PageTitle";
import InputText from "@Components/InputText";
import { ModalProps, User } from "@Types/index";
import Button from "@Components/Button";

function ProductModal({
  openModal,
  onCloseModal,
  acction,
}: ModalProps) {
  const methods = useForm<User>();

  function save(data: User) {
    console.log("dataa", data);
  }

  console.log(methods.watch());
  return (
    <Modal show={openModal} size="4xl" onClose={onCloseModal} popup>
      <Modal.Header />
      <Modal.Body>
        <div className="h-auto w-auto">
          {acction === "create" && (
            <PageTitle>Nuevo Usuario</PageTitle>
          )}
          {acction === "edit" && (
            <PageTitle>Modificar Usuario</PageTitle>
          )}

          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(save)}
              className="flex flex-col"
            >
              <InputText
                name="name"
                type="text"
                label="Nombre"
                errors={methods.formState.errors}
              />
              <InputText
                name="lastName"
                type="text"
                label="Apellidos:"
                errors={methods.formState.errors}
              />
              <InputText
                name="email"
                type="text"
                label="Email:"
                errors={methods.formState.errors}
              />
              <InputText
                name="password"
                type="password"
                label="Password:"
                errors={methods.formState.errors}
              />
              <InputText
                name="passwordVerified"
                type="password"
                label="Repite el password:"
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
