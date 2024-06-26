import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// components
import InputText from "@Components/InputText";
import Button from "@Components/Button";
//other
import { LoginForm } from "@Types/index";
import Logo from "@Assets/images/wong_logo.jpg";
import * as Url from "@Constants/url";
function Login() {
  const methods = useForm<LoginForm>({
    // resolver: zodResolver(QrUrlSchema),
  });
  const navigate = useNavigate();
  function save(data: LoginForm) {
    console.log(data);

    navigate(Url.URL_HOME);
  }
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <a
          href="#"
          className="mb-6 flex items-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img className="mr-2 h-12 w-28" src={Logo} alt="logo" />
        </a>
        <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
              Inicia sesión
            </h1>
            <FormProvider {...methods}>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={methods.handleSubmit(save)}
              >
                <InputText
                  name="email"
                  type="text"
                  label="Tu email:"
                  placeholder="ejemplo@email.com"
                  errors={methods.formState.errors}
                />
                <InputText
                  name="password"
                  type="password"
                  label="Password:"
                  placeholder="••••••••"
                  errors={methods.formState.errors}
                />

                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="text-primary-600 dark:text-primary-500 text-sm font-medium hover:underline"
                  >
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
                <Button color="green">Ingresar</Button>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
