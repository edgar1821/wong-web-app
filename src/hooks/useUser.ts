/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { fetchData } from "@Helpers/fetchData";
import { URLS_API } from "@Constants/url";
import { Option, Rol, User } from "@Types/index";

function useUser() {
  const [rolesOption, setRolesOption] = useState<Option[]>([]);
  const [listaUsuarios, setListaUsuarios] = useState([]);
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
      console.log(response.data);
    } catch (e) {
      console.error(e);
    }
  }
  async function fetchUsers() {
    const response = await fetchData({
      url: URLS_API.URL_USERS,
      Type: "get",
      useAuth: true,
    });

    if (response.status === 200) {
      const listaU = response.data;
      setListaUsuarios(listaU);
    }
  }
  useEffect(() => {
    fetchRoles();
  }, []);
  return { rolesOption, listaUsuarios, fetchSaveUser, fetchUsers };
}

export default useUser;
