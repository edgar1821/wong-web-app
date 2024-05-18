import { create } from "zustand";
import { AuthState, authSlice } from "./authSlice";

interface StateApp extends AuthState {}

// export const useStore = createStore<StateApp>((set) => ({
//   ...authSlice.getState(),
// }));

export const useStore = create<StateApp>(() => ({
  ...authSlice.getState(),
}));
