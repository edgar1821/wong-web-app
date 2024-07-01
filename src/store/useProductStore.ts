import { create } from "zustand";
import { IProduct, IOption, TypeCurrency } from "@Types/index";
import { fetchData } from "@Helpers/fetchData";
import { URLS_API } from "@Constants/url";
import { TOAST_TYPE } from "@Constants/action";
interface IProductStore {
  productSelected: IProduct;
  products: IProduct[];
  listProductOption: IOption[];
  listCurrencyTypesOption: IOption[];
  //toast
  toast: {
    type: string;
    message: string;
  };

  clearToast: () => void;
  fetchCurrencyTypes: () => void;
  fetchProducts: () => void;
  fetchSaveProduct: (data: IProduct) => void;
  fetchDeleteProduct: (product: IProduct) => void;
  fetchInfoProducto: (producto_id: string) => void;
  fetchUpdateProduct: (data: IProduct) => void;
}

export const useProductStore = create<IProductStore>((set) => ({
  productSelected: {} as IProduct,
  products: [],
  listProductOption: [],
  listCurrencyTypesOption: [],
  toast: {
    type: "",
    message: "",
  },
  clearToast: () => {
    set({
      toast: {
        type: "",
        message: "",
      },
    });
  },
  fetchProducts: (): void => {
    fetchData({
      url: URLS_API.URL_PRODUCTS,
      Type: "get",
      useAuth: true,
    })
      .then((response) => {
        if (response.status === 200) {
          const { payload: { product_list = [] } = {} } =
            response.data;
          set({ products: product_list });
        }
      })
      .catch((error) => {
        console.error("error al obtener los productos", error);
      });
  },
  fetchCurrencyTypes: (): void => {
    fetchData({
      url: URLS_API.URL_CURRENCY_TYPES,
      Type: "get",
      useAuth: true,
    })
      .then((response) => {
        if (response.status === 200) {
          const { payload: { list = [] } = {} } = response.data;
          const listCurrencyTypesOption: IOption[] = list.map(
            (item: TypeCurrency) => ({
              value: item.currency_type_id,
              label: item.currency_type,
            }),
          );
          set({ listCurrencyTypesOption });
        }
      })
      .catch((error) => {
        console.error("error al obtener los tipos de moneda", error);
      });
  },
  fetchSaveProduct: async (data: IProduct) => {
    try {
      const response = await fetchData({
        url: URLS_API.URL_PRODUCTS,
        Type: "post",
        useAuth: true,
        body: data,
      });

      if (response.status === 201) {
        set({
          toast: {
            type: TOAST_TYPE.SUCCESS,
            message: "Se guardo correctamente",
          },
        });
      }
    } catch (error) {
      set({
        toast: {
          type: TOAST_TYPE.ERROR,
          message: "Error al registrar el producto",
        },
      });
      console.log("error registrar producto", error);
    }
  },
  fetchDeleteProduct: async (product: IProduct) => {
    try {
      const response = await fetchData({
        url: `${URLS_API.URL_PRODUCTS}/${product.product_id}`,
        Type: "delete",
        useAuth: true,
      });
      if (response.status === 200) {
        set({
          toast: {
            type: TOAST_TYPE.SUCCESS,
            message: "El pructo se elimino correctamente",
          },
        });
      }
    } catch (error) {
      set({
        toast: {
          type: TOAST_TYPE.ERROR,
          message: "Error al eliminar producto",
        },
      });
      console.log("error eliminar producto", error);
    }
  },
  fetchInfoProducto: async (producto_id: string) => {
    try {
      const path = `${URLS_API.URL_PRODUCTS}/${producto_id}`;
      const response = await fetchData({
        url: path,
        Type: "get",
        useAuth: true,
      });
      if (response.status === 200) {
        const { payload = {} } = response.data;
        set({ productSelected: payload });
      }
    } catch (error) {
      console.log("error registrar producto", error);
    }
  },
  fetchUpdateProduct: async (data: IProduct) => {
    try {
      const response = await fetchData({
        url: URLS_API.URL_PRODUCTS,
        Type: "put",
        useAuth: true,
        body: data,
      });

      if (response.status === 200) {
        set({
          toast: {
            type: TOAST_TYPE.SUCCESS,
            message: "Se actualizo correctamente",
          },
        });
        set({ productSelected: data });
      }
    } catch (error) {
      set({
        toast: {
          type: TOAST_TYPE.ERROR,
          message: "Error al actualizar el producto",
        },
      });
      console.log("error registrar producto", error);
    }
  },
}));
