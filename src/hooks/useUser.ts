/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { fetchData } from "@Helpers/fetchData";
import { URLS_API } from "@Constants/url";
import { Option, Rol, User } from "@Types/index";

function useUser() {
  const [rolesOption, setRolesOption] = useState<Option[]>([]);
  async function fetchRoles() {
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
    setRolesOption(rolesOption);
  }
  async function fetchSaveUser(user: User) {
    const body: any = {
      name: user.name,
      email: user.email,
    };
    const response = await fetchData({
      url: URLS_API.URL_USERS,
      body,
      Type: "post",
      useAuth: true,
    });
  }
  useEffect(() => {
    fetchRoles();
  }, []);
  return { rolesOption };
}

export default useUser;
