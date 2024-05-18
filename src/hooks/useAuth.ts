/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  function sessionValidate() {
    const session = window.localStorage.getItem("wongAuth");
    if (session) {
      const decoded: any = jwtDecode(session);
      // const {
      //   payload: { user, token },
      // } = decoded;
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        setIsAuthenticated(false);
        setUser({});
      } else {
        setIsAuthenticated(true);
        setUser(decoded);
      }
    } else {
      setIsAuthenticated(false);
      setUser({});
    }
  }
  useEffect(() => {
    function handleChanges(event: StorageEvent) {
      if (event.key === "wongAuth") {
        const value = window.localStorage.getItem("wongAuth");

        console.log("value", value);
        console.log(typeof value);
        if (value !== "" && value !== null) {
          const parsedValue = JSON.parse(value);
          setIsAuthenticated(true);
          setUser(parsedValue);
        } else {
          setIsAuthenticated(false);
          setUser({});
        }
      }
    }

    window.addEventListener("storage", handleChanges);
    sessionValidate();

    return () => {
      window.removeEventListener("storage", handleChanges);
    };
  }, []);
  return { isAuthenticated, user };
}
