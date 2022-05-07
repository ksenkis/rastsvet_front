import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import logo from './../images/logo.png';
import mainLogo from '../../images/mainLogo.png';
import sunburst from './../images/sunburst.png';
import sunburst1 from '../../images/sunburst1.png';
import { Logo } from './styled';

const pages = ['Главная', 'Раскрасить изображение', 'Галерея', 'Об алгоритме'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const links = ['', 'image/', 'gallery/', 'algorithm/'];

const TopBar = (props: any) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [menuClosed, setMenuClosed] = useState(true);
  // const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (idx: number) => {
    setAnchorElNav(null);
    if (idx >= 0) {
      window.location.assign(`http://localhost:3000/${links[idx]}`);
    }
  };

  const handleRedirect = (idx: number) => {
    window.location.assign(`http://localhost:3000/${links[idx]}`);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              alignItems: { xs: 'none', md: 'center' },
            }}
          >
            <Logo src={sunburst1} />
            РАСЦВЕТ
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, idx) => (
                <MenuItem key={page} onClick={() => handleCloseNavMenu(idx)}>
                  <Typography textAlign="center" color="black">
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            РАСЦВЕТ
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              marginTop: '3px',
            }}
          >
            {pages.map((page, idx) => (
              <Button
                // color="inherit"
                key={page}
                onClick={() => handleRedirect(idx)}
                sx={{
                  my: 2,
                  color: 'black',
                  display: 'block',
                  ':hover': {
                    color: '#575853',
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {props.isAuthenticated ? (
            <Button color="inherit" onClick={() => props.logout()}>
              Выйти
            </Button>
          ) : null}

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default TopBar;
