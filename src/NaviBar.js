import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from './Imagens/logo.png';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Popout from 'react-popout';
//import { createRoot } from 'react-dom/client';

import './stilo.css';
//import Popout from 'react-popout';
class Navibar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.handleOnOpen = this.handleOnOpen.bind(this);
    this.handleOnClose = this.handleOnClose.bind(this);
  }

  handleOnOpen() {
    this.setState((prevState) => ({
      open: true,
    }));
  }

  handleOnClose() {
    this.setState((prevState) => ({
      open: false,
    }));
  }
  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ background: '#000' }} position="static">
          <Toolbar>
            <img
              src={Logo}
              width={49}
              height={60}
              className="foto"
              alt="logo"
            />
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
              onClick={(e) => this.handleOnOpen()}
            >
              Ajuda
            </Button>
            {this.state.open && (
              <Popout
                options={{
                  height: '250px',
                  width: '400px',
                  top: '500px',
                  left: '500px',
                }}
                className="ponteiro"
                title={`Video Teste`}
                url="https://www.youtube.com/embed/DLyCcp9jKPA"
                onClosing={(event, reason) => {
                  if (
                    reason !== 'backdropClick' &&
                    reason !== 'escapeKeyDown'
                  ) {
                    // Set 'open' to false, however you would do that with your particular code.
                    this.setState(false);
                  }
                }}
              >
                {/* <iframe
                  id="player"
                  type="text/html"
                  width="640"
                  height="360"
                  title="meuvideo"
                  src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
                  frameborder="0"
                ></iframe> */}
              </Popout>
            )}

            <Button color="inherit">Logar</Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}

export default Navibar;
