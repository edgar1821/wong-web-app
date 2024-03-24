import { TableColumn } from "react-data-table-component";
import Layout from "@Components/Layout";
import { DataRow } from "@Types/datatable";

import Datatable from "@Components/Datatable";

const columns: TableColumn<DataRow>[] = [
  {
    name: "Id",
    selector: (row: DataRow) => row.id,
    sortable: true,
  },
  {
    name: "Nombre",
    selector: (row: DataRow) => row.name,
    sortable: true,
  },
];

const data: Array<DataRow> = [
  {
    id: 1,
    name: "Beetlejuice",
  },
  {
    id: 2,
    name: "Ghostbusters",
  },
];
function Products() {
  return (
    <Layout title="pagina">
      <h1
        className="
      mb-4 
      text-2xl 
      font-extrabold 
      leading-none 
      tracking-tight 
      text-brand-green-200 
      dark:text-white 
      md:text-4xl 
      "
      >
        Productos
      </h1>
      <div className="overscroll-auto">
        <Datatable title="Produtos" columns={columns} data={data} />
      </div>
    </Layout>
  );
}

export default Products;
