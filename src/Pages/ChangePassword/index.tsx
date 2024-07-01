// components
import Button from "@Components/Button";
import InputText from "@Components/InputText";
import Layout from "@Components/Layout";
import PageTitle from "@Components/PageTitle";
import { User } from "@Types/index";
import { FormProvider, useForm } from "react-hook-form";
function ChangePassword() {
  const methods = useForm<User>({
    defaultValues: {
      name: "Juan",
      lastName: "Cabrera",
      email: "juan@ortopediawong.com",
    },
  });
  function save(data: User) {
    console.log(data);
  }
  return (
    <Layout>
      <>
        <PageTitle>Cambio de password</PageTitle>
        <div className="md:w-1/2">
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(save)}
              className="flex flex-col"
            >
              <InputText
                name="password"
                type="password"
                label="Password anterior:"
              />
              <InputText
                name="password"
                type="password"
                label="Nuevo password:"
              />
              <InputText
                name="passwordVerified"
                type="password"
                label="Repite el password:"
              />
              <Button type="submit">Guardar</Button>
            </form>
          </FormProvider>
        </div>
      </>
    </Layout>
  );
}

export default ChangePassword;
