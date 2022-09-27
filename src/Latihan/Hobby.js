import ButtonAppBar from '../component/AppBar/ButtonAppBar';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

const Hobby = () => {
  return (
    <div style={{ width: '100%' }}>
      <ButtonAppBar />
      <Box sx={{ width: '100%', textAlign: 'center', mt: '4%' }}>
        <Typography variant="h3" style={{ marginBottom: '30px' }}>
          User App - Hobby
        </Typography>
        <Typography variant="h4">Halaman Hobby</Typography>
      </Box>
    </div>
  );
};

export default Hobby;
