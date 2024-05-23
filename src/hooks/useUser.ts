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
      password: user.password,
      phone_number: user.phoneNumber,
      role_id: user.rol_id,
    };
    try {
      const response = await fetchData({
        url: URLS_API.URL_USERS,
        body,
        Type: "post",
        useAuth: true,
      });
      debugger;
    } catch (e) {
      debugger;
    }
  }
  useEffect(() => {
    fetchRoles();
  }, []);
  return { rolesOption, fetchSaveUser };
}

export default useUser;
