// import {} from 'react'
import { TableColumn } from "react-data-table-component";
import { Button } from "flowbite-react";
import { OperationAction, Cotizacion } from "@Types/index";

interface ColumnsProps {
  onClick: (accion: OperationAction, item: Cotizacion) => void;
}
function Columns({
  onClick,
}: ColumnsProps): TableColumn<Cotizacion>[] {
  const columns: TableColumn<Cotizacion>[] = [
    {
      name: "Id",
      selector: (row: Cotizacion) => row.id!,
      sortable: true,
      omit: true,
    },
    {
      name: "Ruc Cliente",
      selector: (row: Cotizacion) => row.clienteRuc,
      sortable: true,
    },
    {
      name: "Paciente",
      selector: (row: Cotizacion) => row.paciente,
      sortable: true,
    },
    {
      name: "Doctor",
      selector: (row: Cotizacion) => row.medico.name,
      sortable: true,
    },
    {
      name: "Acciones",
      cell: (row: Cotizacion) => (
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
