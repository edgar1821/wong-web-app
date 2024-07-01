import { create } from "zustand";
import { fetchData } from "@Helpers/fetchData";
import {
  IDocumentType,
  IOption,
  IProforma,
  IToast,
} from "@Types/index";
import { URLS_API } from "@Constants/url";
import { TOAST_TYPE } from "@Constants/action";

interface ICotizacionStore {
  toastCot: IToast;
  cotizacion: IProforma;
  cotizaciones: IProforma[];
  document_types: IOption[];
  clearToast: () => void;
  fetchCotizaciones: () => void;
  fetchTipoDocumento: () => void;
  //   fetchRegistroCotizacion: (data: Cotizacion) => void;
  //   fetchDeleteCotizacion: (data: Cotizacion) => void;
  //   fetchEditCotizacion: (data: Cotizacion) => void;
  //   fetchInfoCotizacion: (cotizacion_id: string) => void;
}

export const useCotizacionStore = create<ICotizacionStore>((set) => ({
  toastCot: {
    type: "",
    message: "",
  },
  cotizacion: {} as IProforma,
  cotizaciones: [],
  document_types: [],
  clearToast: () => {
    setTimeout(() => {
      set({
        toastCot: {
          type: "",
          message: "",
        },
      });
    }, 5000);
  },
  fetchCotizaciones: (): void => {
    fetchData({
      url: URLS_API.URL_COTIZACION,
      Type: "get",
      useAuth: true,
    })
      .then((response) => {
        if (response.status === 200) {
          const {
            data: { payload: { cotizacion_list = [] } = {} } = {},
          } = response;
          set({ cotizaciones: cotizacion_list });
        }
      })
      .catch((error) => {
        console.error("error al obtener las cotizaciones", error);
      });
  },

  fetchTipoDocumento: (): void => {
    fetchData({
      url: URLS_API.URL_DOCUMENT_TYPE,
      Type: "get",
      useAuth: true,
    })
      .then((response) => {
        if (response.status === 200) {
          const {
            data: {
              payload: {
                document_type_list = [] as IDocumentType[],
              } = {},
            } = {},
          } = response;
          const document_types: IOption[] = document_type_list.map(
            (item: IDocumentType) =>
              ({
                value: item.document_type_id,
                label: item.document_name,
              }) as IOption,
          );
          set({ document_types });
        }
      })
      .catch((error) => {
        console.error(
          "error al obtener los tipos de documentos",
          error,
        );
      });
  },
}));
