// import {} from 'react'
import { TableColumn } from "react-data-table-component";
import { Button } from "flowbite-react";
import { OperationAction, Product } from "@Types/index";

interface ColumnsProps {
  //   onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClick: (accion: OperationAction, item: Product) => void;
}
function Columns({ onClick }: ColumnsProps): TableColumn<Product>[] {
  const columns: TableColumn<Product>[] = [
    {
      name: "Id",
      selector: (row: Product) => row.id!,
      sortable: true,
      omit: true,
    },
    {
      name: "Nombre",
      selector: (row: Product) => row.name,
      sortable: true,
    },
    {
      name: "Acciones",
      cell: (row: Product) => (
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
