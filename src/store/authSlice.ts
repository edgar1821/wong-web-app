import { create } from "zustand";

import { LoginForm, UserSession } from "@Types/index";
import { fetchData } from "@Helpers/fetchData";
import { URLS_API } from "@Constants/url";
export interface AuthState {
  session: UserSession;
  login: (user: LoginForm) => void;
  logOut: () => void;
  // getSession: () => void;
}

export const authSlice = create<AuthState>((set) => ({
  session: {
    userId: "",
    user: "",
    email: "",
  },
  login: async (user) => {
    fetchData({
      url: URLS_API.URL_LOGIN,
      Type: "post",
      body: user,
    })
      .then((response) => {
        if (response.status === 200) {
          const { payload = {} } = response.data;

          if (payload.token) {
            localStorage.setItem("wongAuth", JSON.stringify(payload));
            set({ session: payload.user });
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  logOut: () => {
    localStorage.removeItem("wongAuth");
  },
}));
