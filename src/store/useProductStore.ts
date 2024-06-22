import { create } from "zustand";
import { IProduct, IOption, TypeCurrency } from "@Types/index";
import { fetchData } from "@Helpers/fetchData";
import { URLS_API } from "@Constants/url";
import { TOAST_TYPE } from "@Constants/action";
interface IProductStore {
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
}

export const useProductStore = create<IProductStore>((set) => ({
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
  fetchProducts: async () => {
    const response = await fetchData({
      url: URLS_API.URL_PRODUCTS,
      Type: "get",
      useAuth: true,
    });
    if (response.status === 200) {
      const { payload: { product_list = [] } = {} } = response.data;
      set({ products: product_list });
    }
  },
  fetchCurrencyTypes: async () => {
    const response = await fetchData({
      url: URLS_API.URL_CURRENCY_TYPES,
      Type: "get",
      useAuth: true,
    });

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
}));
