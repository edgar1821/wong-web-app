import { User, Option, Rol } from "@Types/index";
import { fetchData } from "@Helpers/fetchData";
import { URLS_API } from "@Constants/url";
import { createStore } from "zustand";

// "role_id": "f5932885-0398-4b8b-ab2a-0a9f8f7947cf",
// "role_name": "Vendedor",
// "user_screen": true,
// "doctor_screen": true,
// "price_quote_screen": true
export interface UserState {
  rolesOption: Array<Option>;
  createUser: (user: User) => void;
  fetchRoles: () => void;
}
export const userSlice = createStore<UserState>((set) => ({
  rolesOption: [],
  createUser: async (user) => {
    fetchData({
      url: URLS_API.URL_USERS,
      Type: "post",
      body: user,
    }).then((response) => {
      if (response.status === 200) {
        console.log("response", response);
      }
    });
  },
  fetchRoles: async () => {
    let rolesOption: Option[] = [];
    const response = await fetchData({
      url: URLS_API.URL_ROLES,
      Type: "get",
      useAuth: true,
    });
    if (response.status === 200) {
      const rolesList = response.data;

      rolesOption = rolesList.map((role: Rol) => ({
        label: role.role_name,
        value: role.role_id,
      }));
    }
    set({ rolesOption });
  },
}));
