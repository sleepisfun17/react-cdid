import { createContext, useState, useEffect } from "react";
import { validateToken } from "../api/user/APIUser";

//createContext
const AuthContext = createContext();

//provier
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    // console.log(token + "token in context");

    //cek token from local storage
    if (token) {
      //get data from token
      validateToken({ TokenValue: token })
        .then((res) => {
          console.log(res);
          if (res.status == 200 && res.data) {
            setAuth({ ...res.data });
            localStorage.setItem("userToken", res.data.token);
          }
        })
        .catch((err) => {
          localStorage.removeItem("userToken");
          console.log(err);
        });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {/* <AuthContext.Provider value={{ auth: auth, setAuth: setAuth }}> */}
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
