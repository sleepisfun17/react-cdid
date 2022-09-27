import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import ButtonAppBar from '../component/AppBar/ButtonAppBar';

const ViewPage = () => {
  const id = useParams();
  const state = useLocation();
  console.log(state);
  return (
    <div style={{ width: '100%' }}>
      <ButtonAppBar />
      <Box sx={{ width: '100%', textAlign: 'center', mt: '4%' }}>
        <Typography variant="h3" style={{ marginBottom: '30px' }}>
          Informasi Tentang
          <br />
          <b>{state.state.datas.name}</b>
        </Typography>
        <Typography variant="h4">
          Halo👋, saya {state.state.datas.name}. Saya tinggal di {state.state.datas.address}. Hobi saya {state.state.datas.hobby}.
        </Typography>
      </Box>
    </div>
  );
};

export default ViewPage;
