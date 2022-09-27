import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PeopleIcon from '@mui/icons-material/People';
import { NavLink } from 'react-router-dom';

export default function ButtonAppBar() {
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
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
