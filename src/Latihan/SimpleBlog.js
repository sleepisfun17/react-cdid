import React, { useEffect, useState } from 'react';
import ButtonAppBar from '../component/AppBar/ButtonAppBar';
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
import ocean from '../assets/greatOcean.jpg';

function MediaCard({ data, index, list, setList }) {
  const [openMediaCard, setOpenMediaCard] = useState(false);
  const [edit, setEdit] = useState(false);
  return (
    <Card sx={{ width: '300px', display: 'inline-block', marginLeft: '20px', marginTop: '20px' }}>
      <CardMedia component="img" height="140" image={ocean} alt="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <b>Name: </b>
          {data.name}
        </Typography>
        <Typography variant="h6" color="text.secondary" style={{ paddingBottom: '5px' }}>
          <b style={{ fontSize: 'small' }}>Place of Birth, Date of Birth: </b> <br />
          {data.place}, {data.date.$d.getDate()} {data.date.$d.getMonth() + 1} {data.date.$d.getFullYear()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Hobby: </b>
          {data.hobby}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <Button
          onClick={() => {
            setOpenMediaCard(true);
            setEdit(true);
          }}
          size="small"
        >
          Edit
        </Button>
        <DialogInput list={list} setList={setList} open={openMediaCard} data={data} setOpen={setOpenMediaCard} edit={edit} index={index} />
      </CardActions>
    </Card>
  );
}

const DialogInput = ({ open, setOpen, data, list, setList, edit, index }) => {
  const [obj, setObj] = useState(data);
  const handleClose = () => {
    setOpen(false);
  };

  const onSave = () => {
    if (obj.name == '' || obj.place == '' || obj.date == '' || obj.hobby == '') {
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
      place: '',
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
          <TextField label="Birth Place" value={obj.place} onChange={(e) => setObj({ ...obj, place: e.target.value })} />
          <DesktopDatePicker label="Date of Birth" inputFormat="MM/DD/YYYY" value={obj.date} onChange={(e) => setObj({ ...obj, date: e })} renderInput={(params) => <TextField {...params} />} />
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

const BlogApp = () => {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState([]);
  const [name, setName] = useState('');
  const [data, setData] = useState({
    name: '',
    date: dayjs(new Date()),
    place: '',
    hobyy: '',
  });

  return (
    <div style={{ width: '100%' }}>
      <ButtonAppBar />
      <Box sx={{ width: '100%', textAlign: 'center', mt: '4%' }}>
        <Typography variant="h4">Contact Data</Typography>
        <Typography variant="p">Make Your Friends Stay Forever</Typography>
        <Button onClick={() => setOpen((open) => !open)} sx={{ display: 'block', margin: 'auto', mt: '20px' }} variant="contained">
          Add Your Friends
        </Button>
      </Box>
      <div style={{ marginLeft: '15%', marginTop: '20px' }}>
        <TextField value={name} onChange={(e) => setName(e.target.value)} id="outlined-search" label="Search field" type="search" />
      </div>
      <DialogInput open={open} setOpen={setOpen} data={data} list={list} setList={setList} />

      <div style={{ marginLeft: '13%', width: '80%', marginTop: '30px' }}>
        {list.map((el, index) => {
          if (el.name.includes(name)) return <MediaCard list={list} setList={setList} index={index} key={index} data={el} />;
        })}
      </div>
    </div>
  );
};

export default BlogApp;
