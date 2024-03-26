import {
  Button,
  Checkbox,
  Label,
  Modal,
  TextInput,
} from "flowbite-react";
import { useForm } from "react-hook-form";
import PageTitle from "@Components/PageTitle";
import InputText from "@Components/InputText";
import { Product } from "@Types/index";
interface ProductModalProps {
  openModal: boolean;
  onCloseModal: () => void;
}
function ProductModal({ openModal, onCloseModal }: ProductModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>();

  function save(data: Product) {}
  return (
    <>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <PageTitle>Nuevo Producto</PageTitle>
            <form onSubmit={handleSubmit(save)}>
              <InputText
                name="name"
                type="text"
                label="Tu email:"
                placeholder="ejemplo@email.com"
                errors={errors}
                register={register}
              />
            </form>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput id="password" type="password" required />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <a
                href="#"
                className="text-cyan-700 dark:text-cyan-500 text-sm hover:underline"
              >
                Lost Password?
              </a>
            </div>
            <div className="w-full">
              <Button>Log in to your account</Button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?&nbsp;
              <a
                href="#"
                className="text-cyan-700 dark:text-cyan-500 hover:underline"
              >
                Create account
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProductModal;
