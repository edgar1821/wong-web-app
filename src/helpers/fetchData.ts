/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, {
  AxiosResponse,
  AxiosRequestConfig,
  RawAxiosRequestHeaders,
} from "axios";
interface FetchProps {
  url: string;
  Type: "post" | "get" | "put" | "delete";
  useAuth?: boolean;
  body?: any;
}
export async function fetchData(props: FetchProps) {
  const { url, Type, body, useAuth = false } = props;

  const config: AxiosRequestConfig = {
    headers: {
      "Content-Type": "application/json",
    } as RawAxiosRequestHeaders,
  };
  const urlBase = import.meta.env.VITE_API_BASE;
  const urlFinal = `${urlBase}${url}`;

  if (useAuth) {
    const auth = JSON.parse(localStorage.getItem("wongAuth") || "");
    const token = auth?.token;
    if (config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  let response: AxiosResponse | null = null; // Initialize response with null
  if (Type === "get") {
    response = await axios.get(urlFinal, config);
  }
  if (Type === "post") {
    response = await axios.post(urlFinal, body, config);
  }
  if (Type === "put") {
    response = await axios.put(urlFinal, body, config);
  }
  if (Type === "delete") {
    response = await axios.delete(urlFinal, config);
  }

  return response!;
}
