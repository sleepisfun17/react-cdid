import React from 'react';
import { Box, Button, Container, Paper, Stack, TextField } from '@mui/material';
import { userLogin, validateGoogle } from '../api/user/APIUser';
import useAuth from '../hooks/useAuth';
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';

import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';

const clientId = `${process.env.REACT_APP_CLIENT_ID}`;

function LoginPage() {
  React.useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
      });
    };
    gapi.load('client:auth2', initClient);
  });
  const [obj, setObj] = React.useState({ email: '', password: '' });
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();

  const onSuccess = async (res) => {
    console.log('success:', res);
    validateGoogle({ email: res.profileObj.email, tokenGoogle: res.tokenId })
      .then((res) => {
        if (res.status == 200 && res.data) {
          setAuth(res.data);
          localStorage.setItem('userToken', res.data.token);

          if (state) {
            console.log('pindah old route');
            navigate(state.from.pathname, { replace: true });
          } else {
            navigate('/', { replace: true });
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onFailure = (err) => {
    console.log('failed:', err);
  };

  const Logout = (res) => {
    console.log('success', res);
  };

  React.useEffect(() => {
    if (auth?.token) {
      navigate('/', { replace: true });
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
          localStorage.setItem('userToken', res.data.token);

          if (state) {
            console.log('pindah old route');
            navigate(state.from.pathname, { replace: true });
          } else {
            navigate('/', { replace: true });
          }
        }
      })
      .catch((err) => {
        console.log(err.response.data, err.response.status);
      });
  };

  return (
    <Box>
      <Container maxWidth={'md'}>
        <Paper>
          <Stack p={3} mt={2} spacing={3} maxWidth="md">
            <TextField label="email" value={obj.email} onChange={(e) => setObj({ ...obj, email: e.target.value })} />
            <TextField label="password" value={obj.password} type={'password'} onChange={(e) => setObj({ ...obj, password: e.target.value })} />
            <Button
              onClick={() => {
                runLogin();
              }}
              variant="contained"
            >
              Login
            </Button>
            <Button variant="text">Register</Button>

            <GoogleLogin clientId={clientId} buttonText="Sign in with Google" onSuccess={onSuccess} onFailure={onFailure} cookiePolicy={'single_host_origin'} isSignedIn={false} />

            <GoogleLogout clientId={clientId} buttonText="Logout" onLogoutSuccess={Logout}></GoogleLogout>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}

export default LoginPage;
