import ButtonAppBar from '../component/AppBar/ButtonAppBar';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

const About = () => {
  return (
    <div style={{ width: '100%' }}>
      <ButtonAppBar />
      <Box sx={{ width: '100%', textAlign: 'center', mt: '4%' }}>
        <Typography variant="h3" style={{ marginBottom: '30px' }}>
          User App - About
        </Typography>
        <Typography variant="h4">Aplikasi ini adalah aplikasi simpel untuk menambahkan data user berupa Nama, Alamat, dan Hobi</Typography>
      </Box>
    </div>
  );
};

export default About;
