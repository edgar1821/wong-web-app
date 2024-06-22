import { Modal } from "flowbite-react";
interface IModalConfirmation {
  title: string;
  message?: string;
  showModal: boolean;
  onCloseModal: () => void;
  onAccept: () => void;
  onDeny: () => void;
}
function ModalConfirmation({
  title,
  message,
  showModal,
  onCloseModal,
  onAccept,
  onDeny,
}: IModalConfirmation) {
  return (
    <Modal show={showModal} onClose={onCloseModal}>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Body>
        <div className="flex w-full flex-col ">
          <p className=" flex justify-center py-1">{message}</p>
        </div>
      </Modal.Body>

      <Modal.Footer className="flex flex-row justify-end">
        <button
          onClick={onDeny}
          className="m-2 rounded-md bg-red-500 px-3 py-2 text-white "
        >
          Cancelar
        </button>
        <button
          onClick={onAccept}
          className="m-2 rounded-md bg-green-500 px-3 py-2 text-white"
        >
          Aceptar
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalConfirmation;
