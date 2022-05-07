import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import sunburst1 from '../../images/sunburst1.png';
import { Logo } from './styled';
import { TopBarProps } from './types';

const pages = ['Главная', 'Раскрасить изображение', 'Галерея', 'Об алгоритме'];
const links = ['', 'image/', 'gallery/', 'algorithm/'];

const TopBar = (props: TopBarProps) => {
  const [anchorElNav, setAnchorElNav] = useState(null);

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
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default TopBar;
