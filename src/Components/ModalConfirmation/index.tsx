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
    <Modal show={showModal} size="4xl" onClose={onCloseModal} popup>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Body>
        <div className="flex flex-col">
          <p>{message}</p>
          <div className=" flex flex-row">
            <button
              onClick={onAccept}
              className="m-2 rounded-md bg-green-500 p-2 text-white"
            >
              Aceptar
            </button>
            <button
              onClick={onDeny}
              className="m-2 rounded-md bg-red-500 p-2 text-white"
            >
              Cancelar
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ModalConfirmation;
