import { useState } from "react";
import { TableColumn } from "react-data-table-component";
import Layout from "@Components/Layout";
import { DataRow } from "@Types/datatable";
// components
import Datatable from "@Components/Datatable";
import Link from "@Components/ButtonLink";
import PageTitle from "@Components/PageTitle";
import ProductModal from "./ProductModal";
const columns: TableColumn<DataRow>[] = [
  {
    name: "Id",
    selector: (row: DataRow) => row.id,
    sortable: true,
    omit: true,
  },
  {
    name: "Nombre",
    selector: (row: DataRow) => row.name,
    sortable: true,
  },
  {
    name: "Acciones",
    cell: (row: DataRow) => (
      <div className="flex">
        <Link href={`/editar/${row.id}`}>Editar</Link>
        <Link color="red" href={`/eliminar/${row.id}`}>
          Eliminar
        </Link>
      </div>
    ),
    sortable: false,
  },
];

const data: Array<DataRow> = [
  {
    id: 1,
    name: "Zapato ortopedico",
  },
  {
    id: 2,
    name: "Silla de rueda",
  },
];
function Products() {
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };
  function handleClickAdd(): void {
    setOpenModal(true);
  }
  return (
    <>
      <Layout title="pagina">
        <PageTitle>Productos</PageTitle>
        <div className="overscroll-auto">
          <Datatable
            title="Produtos"
            columns={columns}
            data={data}
            addActionText="Nuevo producto"
            onClick={handleClickAdd}
          />
        </div>
      </Layout>
      <ProductModal openModal={openModal} onCloseModal={closeModal} />
    </>
  );
}

export default Products;
