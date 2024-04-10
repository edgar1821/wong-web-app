import { useState } from "react";
import { Doctor, OperationAction } from "@Types/index";
import Layout from "@Components/Layout";
import Datatable from "@Components/Datatable";
import PageTitle from "@Components/PageTitle";
import DoctorModal from "./DoctorModal";
import Columns from "./datatableColumns";

const data: Array<Doctor> = [
  {
    idDoctor: 1,
    name: "Juan Cabrera",
  },
  {
    idDoctor: 2,
    name: "Aurelio Gambirazio",
  },
];

function DoctorPage() {
  const [openModal, setOpenModal] = useState(false);
  const [action, setAction] = useState<OperationAction>("create");

  const closeModal = () => {
    setOpenModal(false);
  };
  function handleClickAdd(): void {
    setAction("create");
    setOpenModal(true);
  }
  function handleClickActionRow(
    accion: OperationAction,
    item: Doctor,
  ) {
    console.log(accion);
    console.log(item);
    if (accion === "edit") {
      setAction("edit");
      setOpenModal(true);
    }
  }

  return (
    <>
      <Layout title="Doctores">
        <PageTitle>Doctores</PageTitle>
        <div className="overscroll-auto md:w-7/12">
          <Datatable
            title="Doctores"
            columns={Columns({ onClick: handleClickActionRow })}
            data={data}
            addActionText="Nuevo Doctor"
            onClick={handleClickAdd}
          />
        </div>
      </Layout>
      <DoctorModal
        openModal={openModal}
        onCloseModal={closeModal}
        acction={action}
      />
    </>
  );
}

export default DoctorPage;
