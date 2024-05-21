// import { URLS_API } from "@Constants/url";
// import { fetchData } from "@Helpers/fetchData";
// import { createSlice } from "@reduxjs/toolkit";
// import { Option } from "@Types/index";

// interface UserState {
//   rolesOption: Array<Option>;
// }

// const initialState: UserState = {
//   rolesOption: [],
// };

// export const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     fetchRoles: (state) => {
//       let rolesOption: Option[] = [];
//       const response = await fetchData({
//         url: URLS_API.URL_ROLES,
//         Type: "get",
//         useAuth: true,
//       });
//       if (response.status === 200) {
//         const rolesList = response.data;

//         rolesOption = rolesList.map((role: Rol) => ({
//           label: role.role_name,
//           value: role.role_id,
//         }));
//       }
//     }, // Updated code
//   },
// });
