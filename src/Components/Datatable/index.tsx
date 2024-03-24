/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactDatatable, {
  TableColumn,
} from "react-data-table-component";
import { DataRow } from "@Types/datatable";
import { Button } from "flowbite-react";
const paginationComponentOptions = {
  rowsPerPageText: "Filas por página",
  rangeSeparatorText: "de",
  selectAllRowsItem: true,
  selectAllRowsItemText: "Todos",
};
const customStyles = {
  headRow: {
    style: {
      backgroundColor: "#2E8C3C",
      color: "#FFFFFF", // Cambia este color según tus preferencias
      borderRadius: "10px 10px 0px 0px",
      fontSize: "15px",
    },
  },
};
interface DatatableProps {
  title: string;
  columns: Array<TableColumn<DataRow>>;
  data: Array<any>;
  addActionText?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
function Datatable(props: DatatableProps) {
  const { columns, data, addActionText, onClick } = props;
  return (
    <div className="flex flex-col">
      {/* <h1>{title}</h1> */}
      <div className="mb-2 mt-4 flex flex-wrap gap-2">
        <Button
          className="bg-brand-green-200 hover:bg-brand-green-100"
          size="sm"
          type="button"
          onClick={onClick}
        >
          {addActionText}
        </Button>
      </div>
      <ReactDatatable
        customStyles={customStyles}
        columns={columns}
        data={data}
        pagination
        paginationComponentOptions={paginationComponentOptions}
        fixedHeader
        fixedHeaderScrollHeight="300px"
      />
    </div>
  );
}

export default Datatable;
