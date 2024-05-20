import { create } from "zustand";
import { AuthState, authSlice } from "./authSlice";
import { UserState, userSlice } from "./userSlice";
interface StateApp extends AuthState, UserState {}

// export const useStore = createStore<StateApp>((set) => ({
//   ...authSlice.getState(),
// }));

export const useStore = create<StateApp>(() => ({
  ...userSlice.getState(),
  ...authSlice.getState(),
}));
