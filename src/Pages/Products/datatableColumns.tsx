// import {} from 'react'
import { TableColumn } from "react-data-table-component";
import { Button } from "flowbite-react";
import { OperationAction, IProduct } from "@Types/index";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";

interface ColumnsProps {
  //   onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClick: (accion: OperationAction, item: IProduct) => void;
}
function Columns({ onClick }: ColumnsProps): TableColumn<IProduct>[] {
  const columns: TableColumn<IProduct>[] = [
    {
      name: "Id",
      selector: (row: IProduct) => row.product_id!,
      sortable: true,
      omit: true,
    },
    {
      name: "Nombre",
      selector: (row: IProduct) => row.product,
      sortable: true,
    },
    {
      name: "Precio",
      selector: (row: IProduct) =>
        `${row.currency_type?.currency_type === "Soles" ? "S/" : "$"} ${row.price}`,
      sortable: true,
    },
    {
      name: "Acciones",
      cell: (row: IProduct) => (
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
