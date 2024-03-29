import { useState } from "react";

import { Cotizacion, OperationAction, Product } from "@Types/index";
// components
import Layout from "@Components/Layout";
import Datatable from "@Components/Datatable";

import PageTitle from "@Components/PageTitle";
// import ProductModal from "./ProductModal";
// import Columns from "./datatableColumns";

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
function Cotizacion() {
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
    item: Product,
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
      <Layout title="pagina">
        <PageTitle>Productos</PageTitle>
        <div className="overscroll-auto md:w-7/12">
          <Datatable
            title="Produtos"
            columns={Columns({ onClick: handleClickActionRow })}
            data={data}
            addActionText="Nuevo producto"
            onClick={handleClickAdd}
          />
        </div>
      </Layout>
      <ProductModal
        openModal={openModal}
        onCloseModal={closeModal}
        acction={action}
      />
    </>
  );
}

export default Cotizacion;
