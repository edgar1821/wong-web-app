import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
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
import { TOAST_TYPE } from "@Constants/action";

interface IModalConfirm {
  title: string;
  message?: string;
  showModal: boolean;
  product: IProduct;
}
function Products() {
  const Navigate = useNavigate();
  const fetchProducts = useProductStore(
    (state) => state.fetchProducts,
  );
  const products = useProductStore((state) => state.products);
  const fetchDeleteProduct = useProductStore(
    (state) => state.fetchDeleteProduct,
  );
  const toastStore = useProductStore((state) => state.toast);
  const clearToast = useProductStore((state) => state.clearToast);
  const [showDeleteModal, setShowDeleteModal] =
    useState<IModalConfirm>({
      title: "",
      showModal: false,
      message: "",
      product: {} as IProduct,
    });
  function handleClickAdd(): void {
    const path = `${URLS.URL_PRODUCTS}/registro`;
    Navigate(path);
  }
  function handleClickActionRow(
    accion: OperationAction,
    item: IProduct,
  ) {
    if (accion === "delete") {
      setShowDeleteModal({
        title: "Eliminar producto",
        showModal: true,
        message: `¿Desea eliminar el producto "${item.product}"?`,
        product: item,
      });
    }
    if (accion === "edit") {
      const path = `${URLS.URL_PRODUCTS}/modificar/${item.product_id}`;
      Navigate(path);
    }
  }
  function handleCloseModalDelete() {
    setShowDeleteModal({
      title: "",
      showModal: false,
      message: "",
      product: {} as IProduct,
    });
  }
  function handleAccepDeleteProducto() {
    fetchDeleteProduct(showDeleteModal.product);
    setShowDeleteModal({
      title: "",
      showModal: false,
      message: "",
      product: {} as IProduct,
    });
  }

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  useEffect(() => {
    if (toastStore.type === TOAST_TYPE.SUCCESS) {
      fetchProducts();
    }
  }, [fetchProducts, toastStore.type]);

  useEffect(() => {
    if (toastStore.type === TOAST_TYPE.SUCCESS && toastStore.message) {
      toast.success(toastStore.message);

      setTimeout(() => {
        clearToast();
      }, 5000);
    }
    if (toastStore.type === TOAST_TYPE.ERROR && toastStore.message) {
      toast.error(toastStore.message);
      setTimeout(() => {
        clearToast();
      }, 5000);
    }
  }, [clearToast, fetchProducts, toastStore]);

  return (
    <>
      <Layout title="Producto">
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
        <Toaster />
      </Layout>
      {showDeleteModal.showModal && (
        <ModalConfirmation
          showModal={showDeleteModal.showModal}
          title={showDeleteModal.title}
          message={showDeleteModal.message}
          onCloseModal={handleCloseModalDelete}
          onAccept={handleAccepDeleteProducto}
          onDeny={handleCloseModalDelete}
        />
      )}
    </>
  );
}

export default Products;
