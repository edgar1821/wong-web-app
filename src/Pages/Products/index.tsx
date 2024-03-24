import { TableColumn } from "react-data-table-component";
import Layout from "@Components/Layout";
import { DataRow } from "@Types/datatable";
// components
import Datatable from "@Components/Datatable";
import Link from "@Components/ButtonLink";
import PageTitle from "@Components/PageTitle";
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
  function handleClickAdd(): void {
    console.log("click");
  }
  return (
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
  );
}

export default Products;
