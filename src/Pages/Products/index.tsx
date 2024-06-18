import { useState, useEffect } from "react";

import { OperationAction, IProduct } from "@Types/index";
// components
import Layout from "@Components/Layout";
import Datatable from "@Components/Datatable";

import PageTitle from "@Components/PageTitle";
import ProductModal from "./ProductModal";
import Columns from "./datatableColumns";
import { useProductStore } from "../../store/useProductStore";
interface IProductModal {
  open: boolean;
  action: OperationAction;
}
function Products() {
  // const fetchCurrencyTypes = useProductStore(
  //   (state) => state.fetchCurrencyTypes,
  // );
  const fetchProducts = useProductStore(
    (state) => state.fetchProducts,
  );
  const products = useProductStore((state) => state.products);
  const [modalProduct, setModalProduct] = useState<IProductModal>({
    open: false,
    action: "create",
  });

  const closeModal = () => {
    setModalProduct({ open: false, action: "create" });
  };
  function handleClickAdd(): void {
    setModalProduct({ open: true, action: "create" });
  }
  function handleClickActionRow(
    accion: OperationAction,
    item: IProduct,
  ) {
    console.log(accion);
    console.log(item);
    if (accion === "edit") {
      setModalProduct({ open: true, action: "edit" });
    }
  }
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
      {modalProduct.open && (
        <ProductModal
          openModal={modalProduct.open}
          onCloseModal={closeModal}
          acction={modalProduct.action}
        />
      )}
    </>
  );
}

export default Products;
