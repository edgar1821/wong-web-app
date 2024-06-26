import { useState } from "react";

import { Cotizacion, OperationAction } from "@Types/index";
// components
import Layout from "@Components/Layout";
import Datatable from "@Components/Datatable";

import PageTitle from "@Components/PageTitle";
import CortizacionModal from "./cotizacionModal";
import Columns from "./dtaCotizacioncolumns";

const data: Array<Cotizacion> = [
  {
    id: 1,
    clienteRuc: "10882736140404",
    paciente: "Juan",
    medico: {
      id: 1000,
      name: "Aurelio Gambirazio",
    },
    fechaEmision: new Date(),
    producto: {
      id: 1,
      name: "zapato",
      description: "muy grande",
    },
  },
  {
    id: 2,
    clienteRuc: "1088273616812",
    paciente: "Juanpedro",
    medico: {
      id: 200,
      name: "Perez alvela",
    },
    fechaEmision: new Date(),
    producto: {
      id: 1,
      name: "zapato",
      description: "muy grande",
    },
  },
];
function PageCotizacion() {
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
    item: Cotizacion,
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
      <Layout title="Cotización">
        <PageTitle>Cortizacion</PageTitle>
        <div className="overscroll-auto md:w-7/12">
          <Datatable
            title="Produtos"
            columns={Columns({ onClick: handleClickActionRow })}
            data={data}
            addActionText="Nueva Cotización"
            onClick={handleClickAdd}
          />
        </div>
      </Layout>
      <CortizacionModal
        openModal={openModal}
        onCloseModal={closeModal}
        acction={action}
      />
    </>
  );
}

export default PageCotizacion;
