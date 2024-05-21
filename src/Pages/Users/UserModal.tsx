import { Modal } from "flowbite-react";
import { useForm, FormProvider } from "react-hook-form";

import PageTitle from "@Components/PageTitle";
import InputText from "@Components/InputText";
import SelectInput from "@Components/Select";
import { ModalProps, User } from "@Types/index";
import Button from "@Components/Button";
import useUser from "@Hooks/useUser";
import UserSchema from "./UserSchema";
import { zodResolver } from "@hookform/resolvers/zod";
function ProductModal({
  openModal,
  onCloseModal,
  acction,
}: ModalProps) {
  const { rolesOption } = useUser();
  const methods = useForm<User>({
    resolver: zodResolver(UserSchema),
  });

  function save(data: User) {
    console.log("dataa", data);
  }
  // console.log("rolesOption", rolesOption);

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
              <input type="hidden" name="userId" />
              <InputText
                name="name"
                type="text"
                label="Nombre completo:"
              />
              <InputText name="email" type="text" label="Email:" />
              <InputText
                name="password"
                type="password"
                label="Contraseña:"
              />
              <InputText
                name="passwordVerified"
                type="password"
                label="Repite la contraseña:"
              />
              {rolesOption.length > 0 && (
                <SelectInput
                  name="rol_id"
                  label="Rol del usuario:"
                  options={rolesOption}
                />
              )}

              <Button type="submit">Guardar</Button>
            </form>
          </FormProvider>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ProductModal;
