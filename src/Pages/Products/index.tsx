import { useState, useEffect } from "react";

import { OperationAction, IProduct } from "@Types/index";
// components
import Layout from "@Components/Layout";
import Datatable from "@Components/Datatable";
import ModalConfirmation from "@Components/ModalConfirmation";
import PageTitle from "@Components/PageTitle";
import Columns from "./datatableColumns";
import { useProductStore } from "../../store/useProductStore";
import { useNavigate } from "react-router-dom";
import { URLS } from "@Constants/url";
function Products() {
  const Navigate = useNavigate();
  const fetchProducts = useProductStore(
    (state) => state.fetchProducts,
  );
  const products = useProductStore((state) => state.products);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  function handleClickAdd(): void {
    const path = `${URLS.URL_PRODUCTS}/registro`;
    Navigate(path);
  }
  function handleClickActionRow(
    accion: OperationAction,
    item: IProduct,
  ) {}
  console.log("listProductOption", products);
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <>
      <Layout title="pagina">
        <PageTitle>Productos</PageTitle>
        <div className="overscroll-auto md:w-7/12">
          <Datatable
            title="Produtos"
            columns={Columns({ onClick: handleClickActionRow })}
            data={products}
            addActionText="Nuevo producto"
            onClick={handleClickAdd}
          />
        </div>
      </Layout>
      {showDeleteModal && (
        <ModalConfirmation
          showModal={showDeleteModal}
          title="Confirmación"
          message="¿Desea eliminar el producto?"
        />
      )}
    </>
  );
}

export default Products;
