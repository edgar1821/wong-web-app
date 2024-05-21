import { useState, useEffect } from "react";
import { fetchData } from "@Helpers/fetchData";
import { URLS_API } from "@Constants/url";
import { Option, Rol } from "@Types/index";

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
  useEffect(() => {
    fetchRoles();
  }, []);
  return { rolesOption };
}

export default useUser;
