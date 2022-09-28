import React, { useEffect, useState } from 'react';
import { Typography, CardHeader } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import PeopleIcon from '@mui/icons-material/People';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { NavLink, useNavigate } from 'react-router-dom';
import { Container } from '@mui/system';
import { getPost } from '../../api/mainpages/APIPosts';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ItemSidebar = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  display: 'none',
  [theme.breakpoints.up('sm')]: {
    display: 'block',
  },
}));

const Tugas6 = () => {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState([]);
  const [name, setName] = useState('');
  const [data, setData] = useState({
    name: '',
    address: '',
    hobby: '',
  });

  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPostRequest();
  }, []);

  const getPostRequest = async () => {
    setLoading(true);
    try {
      let source = await getPost();
      // console.log(source.data);
      setPostData(source.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(data);
    }
  };

  return (
    <div style={{ width: '100%' }}>
      {/* AppBar */}
      <Box sx={{ flexGrow: 1, width: '100%', marginBottom: '2rem' }}>
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
            <NavLink
              to="/tugas6"
              style={({ isActive }) => {
                console.log(isActive);
                return isActive ? { color: 'red' } : undefined;
              }}
            >
              <Typography variant="h6" component="div" sx={{ mr: '20px' }}>
                Tugas6
              </Typography>
            </NavLink>
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={9}>
            <Item sx={{ minHeight: '100vh' }} direction="row">
              {loading && <Typography component={'h6'}>Loading🤔🤔🤔</Typography>}
              <Card sx={{ maxWidth: 345 }}>
                {postData.map((item, index) => (
                  <>
                    <CardHeader
                      avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                          R
                        </Avatar>
                      }
                      title={item.title}
                      subheader={item.datePost}
                    />
                    <CardMedia component="img" height="194" image={item.img} alt="Food" />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </CardContent>
                  </>
                ))}
              </Card>
            </Item>
          </Grid>
          <Grid item xs={0} sm={3}>
            <ItemSidebar sx={{ minHeight: '100vh' }}>
              <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <ImageIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <WorkIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Work" secondary="Jan 7, 2014" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <BeachAccessIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Vacation" secondary="July 20, 2014" />
                </ListItem>
              </List>
            </ItemSidebar>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Tugas6;
