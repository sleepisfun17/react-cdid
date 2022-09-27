import React, { useEffect, useState } from 'react';
import { Typography, Dialog, DialogActions, DialogTitle, Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import dayjs from 'dayjs';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import PeopleIcon from '@mui/icons-material/People';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { NavLink, useNavigate } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function MediaCard({ data, index, list, setList }) {
  const navigate = useNavigate();
  const [openMediaCard, setOpenMediaCard] = useState(false);
  const [edit, setEdit] = useState(false);
  return (
    <Card sx={{ marginBottom: '5px' }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography gutterBottom variant="h5" component="div">
              <b style={{ fontSize: 'small' }}>Nama: </b>
              {data.name}
            </Typography>
            <Typography variant="h5" color="text.secondary">
              <b style={{ fontSize: 'small' }}>Address: </b>
              {data.address}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography gutterBottom variant="h5" component="div">
              <b style={{ fontSize: 'small' }}>Hobby: </b>
              {data.hobby}
            </Typography>
            <Button
              color="inherit"
              sx={{ borderRadius: '25px', backgroundColor: 'aqua', color: 'white', textTransform: 'capitalize', margin: '0px 5px' }}
              onClick={() => {
                setOpenMediaCard(true);
                setEdit(true);
              }}
              size="small"
            >
              Edit
            </Button>
            <Button
              onClick={() => navigate(`/view/${index + 1}`, { state: { datas: data } })}
              size="small"
              color="inherit"
              sx={{ borderRadius: '25px', backgroundColor: 'aqua', color: 'white', textTransform: 'capitalize', margin: '0px 5px' }}
            >
              View
            </Button>
            <DialogInput list={list} setList={setList} open={openMediaCard} data={data} setOpen={setOpenMediaCard} edit={edit} index={index} />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}

const DialogInput = ({ open, setOpen, data, list, setList, edit, index }) => {
  const [obj, setObj] = useState(data);
  const handleClose = () => {
    setOpen(false);
  };

  const onSave = () => {
    if (obj.name == '' || obj.address == '' || obj.date == '' || obj.hobby == '') {
      alert("Field Can't be Empty");
      return;
    }
    handleClose();
    if (edit) {
      let temp = [...list];
      temp[index] = obj;
      setList(temp);
    } else {
      let temp = [...list];
      temp.push(obj);
      setList(temp);
    }

    setObj({
      name: '',
      address: '',
      date: dayjs(new Date()),
      hobby: '',
    });
  };

  useEffect(() => {
    console.log(list);
    console.log(obj);
  }, [list, obj]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: '50%',
            height: '85vh',
            padding: '20px',
          },
        }}
      >
        <DialogTitle>Input your friend data</DialogTitle>
        <Stack spacing={3}>
          <TextField label="Name" value={obj.name} onChange={(e) => setObj({ ...obj, name: e.target.value })} />
          <TextField label="Address" value={obj.address} onChange={(e) => setObj({ ...obj, address: e.target.value })} />
          <TextField id="outlined-multiline-flexible" label="Hobby" multiline maxRows={10} value={obj.hobby} onChange={(e) => setObj({ ...obj, hobby: e.target.value })} />
        </Stack>
        <DialogActions>
          <Button
            variant="contained"
            onClick={() => {
              onSave();
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </LocalizationProvider>
  );
};

const SimpleUser = () => {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState([]);
  const [name, setName] = useState('');
  const [data, setData] = useState({
    name: '',
    address: '',
    hobby: '',
  });

  return (
    <div style={{ width: '100%' }}>
      {/* AppBar */}
      <Box sx={{ flexGrow: 1, width: '100%' }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <PeopleIcon />
            </IconButton>
            {/* Menu Bar */}
            <NavLink
              end
              to="/"
              style={({ isActive }) => {
                console.log(isActive);
                return isActive ? { color: 'red' } : undefined;
              }}
            >
              <Typography variant="h6" component="div" sx={{ mr: '20px' }}>
                User App
              </Typography>
            </NavLink>
            <NavLink
              to="/about"
              style={({ isActive }) => {
                console.log(isActive);
                return isActive ? { color: 'red' } : undefined;
              }}
            >
              <Typography variant="h6" component="div" sx={{ mr: '20px' }}>
                About
              </Typography>
            </NavLink>
            <NavLink
              to="/hobby"
              style={({ isActive }) => {
                console.log(isActive);
                return isActive ? { color: 'red' } : undefined;
              }}
            >
              <Typography variant="h6" component="div" sx={{ mr: '20px' }}>
                Hobby
              </Typography>
            </NavLink>
            <Button
              display="flex"
              justifyContent="flex-end"
              alignItems="flex-end"
              color="inherit"
              onClick={() => setOpen((open) => !open)}
              sx={{ borderRadius: '25px', backgroundColor: 'aqua', padding: '10px 15px', textTransform: 'capitalize' }}
            >
              Add User
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Box sx={{ width: '100%', textAlign: 'center', mt: '4%' }}>
        <Typography variant="h4">User Data</Typography>
      </Box>
      <div style={{ marginLeft: '15%', marginTop: '20px' }}>
        <TextField value={name} onChange={(e) => setName(e.target.value)} id="outlined-search" label="Search" type="search" />
      </div>
      <DialogInput open={open} setOpen={setOpen} data={data} list={list} setList={setList} />
      {/* <BasicStack /> */}
      <div style={{ marginLeft: '13%', width: '80%', marginTop: '30px' }}>
        {list.map((el, index) => {
          if (el.name.includes(name)) return <MediaCard list={list} setList={setList} index={index} key={index} data={el} />;
        })}
      </div>
    </div>
  );
};

export default SimpleUser;
