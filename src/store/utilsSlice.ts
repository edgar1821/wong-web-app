import { createStore } from "zustand";

export interface UtilsState {
  toast: (message: string) => void;
}

export const utilsSlice = createStore<UtilsState>((set) => ({
  toast: (message) => {
    console.log(message);
  },
}));
