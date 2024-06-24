// import {} from 'react'
import { TableColumn } from "react-data-table-component";
import { Button } from "flowbite-react";
import { OperationAction, IDoctor } from "@Types/index";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";

interface ColumnsProps {
  onClick: (accion: OperationAction, item: IDoctor) => void;
}
function Columns({ onClick }: ColumnsProps): TableColumn<IDoctor>[] {
  const columns: TableColumn<IDoctor>[] = [
    {
      name: "Id",
      selector: (row: IDoctor) => row.doctor_id!,
      sortable: true,
      omit: true,
    },
    {
      name: "Nombre",
      selector: (row: IDoctor) => row.doctor_name,
      sortable: true,
    },
    {
      name: "Especialidad",
      selector: (row: IDoctor) => row.spaciallity,
      sortable: true,
    },
    {
      name: "Institución",
      selector: (row: IDoctor) => row.institution,
      sortable: true,
    },
    {
      name: "Acciones",
      cell: (row: IDoctor) => (
        <div className="flex flex-row">
          <Button
            color="failure"
            size="xs"
            onClick={() => {
              onClick("delete", row);
            }}
          >
            <FaRegTrashAlt size="20px" />
          </Button>
          <span className="w-2"></span>
          <Button
            color="warning"
            size="xs"
            onClick={() => {
              onClick("edit", row);
            }}
          >
            <FaRegEdit size="20px" />
          </Button>
        </div>
      ),
      sortable: false,
    },
  ];
  return columns;
}

export default Columns;
