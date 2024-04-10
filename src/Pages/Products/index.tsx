import { useState } from "react";

import { OperationAction, Product } from "@Types/index";
// components
import Layout from "@Components/Layout";
import Datatable from "@Components/Datatable";

import PageTitle from "@Components/PageTitle";
import ProductModal from "./ProductModal";
import Columns from "./datatableColumns";

const data: Array<Product> = [
  {
    idProduct: 1,
    name: "Zapato ortopedico",
    description: "algo",
    price: 200,
    idTypeCurrency: 1,
  },
  {
    idProduct: 2,
    name: "Silla de rueda",
    description: "algo",
    price: 400,
    idTypeCurrency: 2,
  },
];
function Products() {
  const [openModal, setOpenModal] = useState(false);
  const [action, setAction] = useState<OperationAction>("create");

  const closeModal = () => {
    setOpenModal(false);
  };
  function handleClickAdd(): void {
    setAction("create");
    setOpenModal(true);
  }
  function handleClickActionRow(
    accion: OperationAction,
    item: Product,
  ) {
    console.log(accion);
    console.log(item);
    if (accion === "edit") {
      setAction("edit");
      setOpenModal(true);
    }
  }
  return (
    <>
      <Layout title="pagina">
        <PageTitle>Productos</PageTitle>
        <div className="overscroll-auto md:w-7/12">
          <Datatable
            title="Produtos"
            columns={Columns({ onClick: handleClickActionRow })}
            data={data}
            addActionText="Nuevo producto"
            onClick={handleClickAdd}
          />
        </div>
      </Layout>
      <ProductModal
        openModal={openModal}
        onCloseModal={closeModal}
        acction={action}
      />
    </>
  );
}

export default Products;
