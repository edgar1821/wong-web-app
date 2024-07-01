import { useState, useEffect } from "react";
import { Doctor, OperationAction } from "@Types/index";
import Layout from "@Components/Layout";
import Datatable from "@Components/Datatable";
import PageTitle from "@Components/PageTitle";
import DoctorModal from "./UserModal";
import Columns from "./UserColumnsDatatable";
import useUser from "@Hooks/useUser";

function UsersPage() {
  const [openModal, setOpenModal] = useState(false);
  const [action, setAction] = useState<OperationAction>("create");
  const { fetchUsers, listaUsuarios } = useUser();
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
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  console.log(listaUsuarios);
  return (
    <>
      <Layout title="Usuarios">
        <PageTitle>Usuarios</PageTitle>
        <div className="overscroll-auto md:w-7/12">
          <Datatable
            title="Usuarios"
            columns={Columns({ onClick: handleClickActionRow })}
            data={listaUsuarios}
            addActionText="Nuevo Usuario"
            onClick={handleClickAdd}
          />
        </div>
      </Layout>
      {openModal && (
        <DoctorModal
          openModal={openModal}
          onCloseModal={closeModal}
          acction={action}
        />
      )}
    </>
  );
}

export default UsersPage;
