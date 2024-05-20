import { useEffect } from "react";
import { Modal } from "flowbite-react";
import { useForm, FormProvider } from "react-hook-form";
import { useStore } from "../../store";
import PageTitle from "@Components/PageTitle";
import InputText from "@Components/InputText";
import SelectInput from "@Components/Select";
import { ModalProps, User } from "@Types/index";
import Button from "@Components/Button";

function ProductModal({
  openModal,
  onCloseModal,
  acction,
}: ModalProps) {
  const fetchRoles = useStore((state) => state.fetchRoles);
  const rolesOption = useStore((state) => state.rolesOption);
  const methods = useForm<User>();

  function save(data: User) {
    console.log("dataa", data);
  }
  useEffect(() => {
    fetchRoles();
  }, [fetchRoles]);

  console.log(rolesOption);
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
                label="Nombre completo:"
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
              {rolesOption.length > 0 && (
                <SelectInput
                  name="rol_id"
                  label="Rol:"
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
