import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from './Imagens/logo.png';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './stilo.css';
export default function NaviBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ background: '#000' }} position="static">
        <Toolbar>
          <img src={Logo} width={49} height={60} className="foto" alt="logo" />
          <Typography
            className="Titulo"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Button
            className="youtube"
            sx={{ color: 'white', marginRight: '2rem' }}
            startIcon={<YouTubeIcon />}
            color="inherit"
          >
            Ajuda
          </Button>
          <Button color="inherit">Logar</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
