import { create } from "zustand";
import { IProduct, IOption, TypeCurrency } from "@Types/index";
import { fetchData } from "@Helpers/fetchData";
import { URLS_API } from "@Constants/url";
/**
 * 
 *  product_id = Column(String(100), primary_key=True)
    product = Column(String(2000))
    price = Column(DECIMAL(precision=10, scale=2), nullable=False)
    description = Column(String(2000))
    # Relaciones
    currency_type = relationship('CurrencyType', back_populates='products')

    currency_type_id = Column(String(100), ForeignKey(
        'currency_type.currency_type_id'))
    # Campos de auditoría
    is_active = Column(Boolean, default=True, unique=False)
    created_at = Column(String(2000))
    update_at = Column(String(2000))
    update_by = Column(String(2000))
 */
interface IProductStore {
  products: IProduct[];
  listProductOption: IOption[];
  listCurrencyTypesOption: IOption[];
  fetchProducts: () => void;
  fetchCurrencyTypes: () => void;
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
}));
