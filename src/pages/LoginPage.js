import React from "react";
import { Box, Button, Container, Paper, Stack, TextField } from "@mui/material";
import { userLogin } from "../api/user/APIUser";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";

function LoginPage() {
  const [obj, setObj] = React.useState({ email: "", password: "" });
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();

  React.useEffect(() => {
    if (auth?.token) {
      navigate("/", { replace: true });
    }
  }, [auth]);

  React.useEffect(() => {
    if (state) {
      console.log(state);
    }
  }, []);

  const runLogin = async () => {
    userLogin(obj)
      .then((res) => {
        console.log(res);
        if (res.status == 200 && res.data) {
          setAuth(res.data);
          localStorage.setItem("userToken", res.data.token);

          if (state) {
            console.log("pindah old route");
            navigate(state.from.pathname, { replace: true });
          } else {
            //navigate("/", { replace: true });
          }
        }
      })
      .catch((err) => {
        console.log(err.response.data, err.response.status);
      });
  };

  return (
    <Box>
      <Container maxWidth={"md"}>
        <Paper>
          <Stack mt={2} spacing={3} maxWidth="md">
            <TextField
              label="email"
              value={obj.email}
              onChange={(e) => setObj({ ...obj, email: e.target.value })}
            />
            <TextField
              label="password"
              value={obj.password}
              type={"password"}
              onChange={(e) => setObj({ ...obj, password: e.target.value })}
            />
            <Button
              onClick={() => {
                runLogin();
              }}
              variant="contained"
            >
              Login
            </Button>
            <Button variant="text">Register</Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}

export default LoginPage;
