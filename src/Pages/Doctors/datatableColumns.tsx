// import {} from 'react'
import { TableColumn } from "react-data-table-component";
import { Button } from "flowbite-react";
import { OperationAction, Doctor } from "@Types/index";

interface ColumnsProps {
  onClick: (accion: OperationAction, item: Doctor) => void;
}
function Columns({ onClick }: ColumnsProps): TableColumn<Doctor>[] {
  const columns: TableColumn<Doctor>[] = [
    {
      name: "Id",
      selector: (row: Doctor) => row.id!,
      sortable: true,
      omit: true,
    },
    {
      name: "Nombre",
      selector: (row: Doctor) => row.name,
      sortable: true,
    },
    {
      name: "Acciones",
      cell: (row: Doctor) => (
        <div className="flex flex-row">
          <Button
            color="failure"
            size="xs"
            onClick={() => {
              onClick("delete", row);
            }}
          >
            Eliminar
          </Button>
          <span className="w-2"></span>
          <Button
            color="warning"
            size="xs"
            onClick={() => {
              onClick("edit", row);
            }}
          >
            Editar
          </Button>
        </div>
      ),
      sortable: false,
    },
  ];
  return columns;
}

export default Columns;
