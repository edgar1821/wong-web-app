/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactDatatable, {
  TableColumn,
} from "react-data-table-component";
import { DataRow } from "@Types/datatable";

const paginationComponentOptions = {
  rowsPerPageText: "Filas por página",
  rangeSeparatorText: "de",
  selectAllRowsItem: true,
  selectAllRowsItemText: "Todos",
};

interface DatatableProps {
  title: string;
  columns: Array<TableColumn<DataRow>>;
  data: Array<any>;
}
function Datatable(props: DatatableProps) {
  const { title, columns, data } = props;
  return (
    <div className="flex flex-col">
      <h1>{title}</h1>
      <ReactDatatable
        columns={columns}
        data={data}
        pagination
        paginationComponentOptions={paginationComponentOptions}
      />
    </div>
  );
}

export default Datatable;
