import { create } from "zustand";

interface IUtils {
  toastError: {
    showToas: boolean;
    message: string;
  };
  setToastError: (message: string) => void;
}
export const useUtilsStore = create<IUtils>((set) => ({
  toastError: {
    showToas: false,
    message: "",
  },
  setToastError: (message: string) => {
    set({ toastError: { showToas: true, message } });
    setTimeout(() => {
      set({ toastError: { showToas: false, message: "" } });
    }, 3000);
  },
}));
