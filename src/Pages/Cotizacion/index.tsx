import { useState } from "react";

import { Cotizacion, OperationAction } from "@Types/index";
// components
import Layout from "@Components/Layout";
import Datatable from "@Components/Datatable";

import PageTitle from "@Components/PageTitle";
import CortizacionModal from "./CotizacionModal";
import Columns from "./dtaCotizacioncolumns";

const data: Array<Cotizacion> = [
  {
    idTipoDocumento: 1,
    idCotizacion: 1,
    nroDocumento: 87654321,

    nombrePaciente: "Juan",
    apellidoPaciente: "hernandez",
    medico: {
      idDoctor: "wdf",
      doctorName: "Aurelio Gambirazio",
      intitution: "",
      speciallity: "",
    },
    fechaEmision: "10/10/2023",
    fechaCaducidad: "20/10/2023",
    producto: {
      idProduct: "1",
      name: "zapato",
      description: "muy grande",
      price: "0",
      idTypeCurrency: "a",
    },
    idMedico: 0,
  },
  {
    idTipoDocumento: 1,
    nroDocumento: 87654321,
    idCotizacion: 2,
    nombrePaciente: "Juan pedro",
    apellidoPaciente: "Marquez Vidal",
    medico: {
      idDoctor: "200",
      doctorName: "Perez alvela",
      intitution: "",
      speciallity: "",
    },
    fechaEmision: "10/10/2023",
    fechaCaducidad: "20/10/2023",
    producto: {
      idProduct: "1",
      name: "zapato",
      description: "muy grande",
      price: "0",
      idTypeCurrency: "0",
    },
    idMedico: 0,
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
