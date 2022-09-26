import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, width: '100%', marginBottom: '50px' }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Button variant="contained" sx={{ borderRadius: '25px', backgroundColor: 'aqua' }}>
            Add User
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} sx={{ marginLeft: '130px' }}>
        Save
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{'Are you sure?'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">Do you want to save?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={handleClose} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

function App() {
  const [data, setData] = useState({});
  const [showInConsole, setShowInConsole] = useState(false);
  const [showInDom, setShowInDom] = useState(false);
  const [list, setList] = useState([
    {
      Nama: 'Luna',
      Address: 'Jalan Agung',
      Hobby: 'Masak',
    },
    {
      Nama: 'Harry',
      Address: 'Jalan Perkutut',
      Hobby: 'Jalan-jalan',
    },
    {
      Nama: 'Garry',
      Address: 'Jalan Sumberasih',
      Hobby: 'Main',
    },
  ]);

  useEffect(() => {
    if (showInConsole) {
      setShowInDom(true);
    } else {
      setShowInDom(false);
    }
  }, [showInConsole]);

  return (
    <div className="App">
      <ButtonAppBar />
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          marginBottom: '50px',
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField required id="outlined-required" label="Name" onChange={(e) => setData({ ...data, name: e.target.value })} />
        </div>
        <div>
          <TextField required id="outlined-required" label="Address" onChange={(e) => setData({ ...data, address: e.target.value })} />
        </div>
        <div>
          <TextField required id="outlined-required" label="Hobby" onChange={(e) => setData({ ...data, hobby: e.target.value })} />
        </div>
        <CustomizedDialogs />
        <Button
          variant="outlined"
          sx={{ marginLeft: '130px' }}
          onClick={() => {
            setShowInConsole((showInConsole) => !showInConsole);
          }}
        >
          {showInDom ? 'Close' : 'Show'}
        </Button>
      </Box>

      {showInDom ? (
        <div style={{ width: '100%', height: '200px', backgroundColor: 'red' }}>
          <h3>Name: {data.name}</h3>
          <h3>Age: {data.age}</h3>
          <h3>Hobby: {data.hobby}</h3>
        </div>
      ) : null}

      {list.map((el, index) => {
        return (
          <div key={index + 1} style={{ width: '100%', height: '200px', backgroundColor: 'red', marginBottom: '20px' }}>
            <h3>Name: {el.Nama}</h3>
            <h3>Address: {el.Address}</h3>
            <h3>Hobby: {el.Hobby}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;
