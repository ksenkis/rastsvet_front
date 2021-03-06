import React, {
  useState,
  useMemo,
  useEffect,
  ChangeEvent,
  FormEvent,
} from 'react';
import { connect } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import * as actions from '../../store/authActions';
import { Wrapper } from './styled';
import { LoginProps } from './types';

function Login(props: LoginProps) {
  const [username, setuserName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginFailed, setIsLoginFailed] = useState(false);

  const handleFormFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onAuth(username, password);
    if (props.isAuthenticated) {
      setIsLoginFailed(false);
    } else {
      setTimeout(function () {
        setIsLoginFailed(true);
      }, 300);
    }
  };

  let navigate = useNavigate();
  const location = useLocation();

  const navigatePathname = useMemo(() => {
    const state = location.state as { from: Location };

    if (state && state.from) {
      return state.from;
    }

    return '/';
  }, [location]);

  useEffect(() => {
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
            ????????
          </Typography>
          {isLoginFailed && (
            <Typography variant="body1" textAlign="center" color="red" mt={2}>
              ?????????????????????? ???????????? ?????????? ?????? ????????????
            </Typography>
          )}
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
              label="??????????"
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
              label="????????????"
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
              ??????????
            </Button>
          </Box>
        </Box>
      </Container>
    </Wrapper>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onAuth: (username: string | null, password: string | null) =>
      dispatch(actions.authLogin(username, password)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
