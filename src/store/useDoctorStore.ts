import { create } from "zustand";
import { fetchData } from "@Helpers/fetchData";
import { IDoctor, IOption, IToast } from "@Types/index";
import { URLS_API } from "@Constants/url";
import { TOAST_TYPE } from "@Constants/action";

interface IDoctorStore {
  doctorToast: IToast;
  doctor: IDoctor;
  doctors: IDoctor[];
  doctorsOption: IOption[];
  clearToast: () => void;
  fetchDoctores: () => void;
  fetchRegistroDoctor: (data: IDoctor) => void;
  fetchDeleteDoctor: (data: IDoctor) => void;
  fetchEditDoctor: (data: IDoctor) => void;
  fetchInfoDoctor: (doctor_id: string) => void;
}

export const useDoctorStore = create<IDoctorStore>((set) => ({
  doctorToast: {
    type: "",
    message: "",
  },
  doctor: {} as IDoctor,
  doctorsOption: [],
  doctors: [],
  clearToast: () => {
    setTimeout(() => {
      set({
        doctorToast: {
          type: "",
          message: "",
        },
      });
    }, 5000);
  },
  fetchDoctores: async () => {
    try {
      const response = await fetchData({
        url: URLS_API.URL_DOCTORS,
        Type: "get",
        useAuth: true,
      });
      if (response.status === 200) {
        const { data: { payload: { doctor_list = [] } = {} } = {} } =
          response;
        const doctorsOption: IOption[] = doctor_list.map(
          (doctor: IDoctor) => ({
            label: doctor.doctor_name,
            value: doctor,
          }),
        );
        set({ doctors: doctor_list, doctorsOption });
      }
    } catch (e) {
      console.error("Error al obtener los doctores", e);
    }
  },
  fetchRegistroDoctor: async (doctor) => {
    try {
      const response = await fetchData({
        url: URLS_API.URL_DOCTORS,
        Type: "post",
        body: doctor,
        useAuth: true,
      });

      if (response.status === 201) {
        set({
          doctorToast: {
            type: TOAST_TYPE.SUCCESS,
            message: "Doctor registrado",
          },
        });
      }
    } catch (e) {
      console.error("Error registro de doctor", e);
      set({
        doctorToast: {
          type: TOAST_TYPE.ERROR,
          message: "Error al registrar el doctor",
        },
      });
    }
  },
  fetchDeleteDoctor: async (doctor) => {
    try {
      const path = `${URLS_API.URL_DOCTORS}/${doctor.doctor_id}`;

      const response = await fetchData({
        url: path,
        Type: "delete",
        useAuth: true,
      });
      if (response.status === 200) {
        set({
          doctorToast: {
            type: TOAST_TYPE.SUCCESS,
            message: "El doctor se elimino correctamente",
          },
        });
      }
    } catch (e) {
      set({
        doctorToast: {
          type: TOAST_TYPE.ERROR,
          message: "Error al eliminar un doctor",
        },
      });
      console.error("Error al eliminar un doctor", e);
    }
  },
  fetchEditDoctor: async (doctor) => {
    try {
      const path = URLS_API.URL_DOCTORS;
      const response = await fetchData({
        url: path,
        Type: "put",
        body: doctor,
        useAuth: true,
      });

      if (response.status === 201) {
        set({
          doctorToast: {
            type: TOAST_TYPE.SUCCESS,
            message: "Doctor modificado",
          },
        });
      }
    } catch (error) {
      //   const err = error as AxiosError;
      console.error("Error al modificar el doctor", error);

      set({
        doctorToast: {
          type: TOAST_TYPE.ERROR,
          message: "Error al modificar el doctor",
        },
      });
    }
  },
  fetchInfoDoctor: async (doctor_id) => {
    try {
      const path = `${URLS_API.URL_DOCTORS}/${doctor_id}`;
      const response = await fetchData({
        url: path,
        Type: "get",
        useAuth: true,
      });
      if (response.status === 200) {
        const { data: { payload: { doctor = {} } = {} } = {} } =
          response;
        set({ doctor });
      }
    } catch (e) {
      console.error("Error al obtener la informacion del doctor", e);
    }
  },
}));
