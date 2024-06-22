import { create } from "zustand";
import { IProduct, IOption, TypeCurrency } from "@Types/index";
import { fetchData } from "@Helpers/fetchData";
import { URLS_API } from "@Constants/url";

interface IProductStore {
  products: IProduct[];
  listProductOption: IOption[];
  listCurrencyTypesOption: IOption[];

  fetchCurrencyTypes: () => void;
  fetchProducts: () => void;
  fetchSaveProduct: (data: IProduct) => void;
}

export const useProductStore = create<IProductStore>((set) => ({
  products: [],
  listProductOption: [],
  listCurrencyTypesOption: [],
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
        console.log("producto registrado");
      }
    } catch (error) {
      console.log("error registrar producto", error);
    }
  },
}));
