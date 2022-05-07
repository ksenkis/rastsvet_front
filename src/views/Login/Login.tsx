import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { connect } from 'react-redux';
import * as actions from '../../store/authActions';
import { useNavigate, useLocation } from 'react-router-dom';

import { Wrapper } from './styled';

function Login(props: any) {
  const [username, setuserName] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  const handleFormFieldChange = (event: any) => {
    switch (event.target.id) {
      case 'username':
        setuserName(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
      default:
        return null;
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.onAuth(username, password);
  };

  let navigate = useNavigate();
  const location = useLocation();

  const navigatePathname = React.useMemo(() => {
    const state = location.state as { from: Location };

    if (state && state.from) {
      return state.from;
    }

    return '/';
  }, [location]);
  // let location = useLocation();
  // let { from } = location.state || { from: { pathname: '/' } };

  React.useEffect(() => {
    if (props.isAuthenticated) {
      navigate(navigatePathname);
    }
  });

  return (
    <Wrapper>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Вход
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Логин"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={handleFormFieldChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Пароль"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleFormFieldChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Войти
            </Button>
          </Box>
        </Box>
      </Container>
    </Wrapper>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onAuth: (username: any, password: any) =>
      dispatch(actions.authLogin(username, password)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
