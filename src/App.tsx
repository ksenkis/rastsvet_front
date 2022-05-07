import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { connect } from 'react-redux';

import Layout from './components/Layout/Layout';
import * as actions from './store/authActions';
import Urls from './Urls';
import { Wrapper } from './styled';
import { StateProps, AppProps } from './types';

const theme = createTheme({
  palette: {
    primary: {
      light: '#6b9b37',
      main: '#9ccc65',
      dark: '#cfff95',
      contrastText: '#000',
    },
    secondary: {
      light: '#fff3ff',
      main: '#ffc0d6',
      dark: '#cb8fa5',
      contrastText: '#000',
    },
  },
  typography: {
    h1: {
      fontSize: 36,
      fontWeight: 600,
    },
    h2: {
      fontSize: 28,
      fontWeight: 600,
    },
    h3: {
      fontSize: 24,
      fontWeight: 600,
    },
    h4: {
      fontSize: 20,
      fontWeight: 600,
    },
    h6: {
      fontSize: 20,
      fontFamily: 'cursive',
    },
  },
});

function App(props: AppProps) {
  // Similar to componentDidMount and componentDidUpdate:
  React.useEffect(() => {
    props.setAuthenticatedIfRequired();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Layout {...props}>
          <Urls {...props} />
        </Layout>
      </Wrapper>
    </ThemeProvider>
  );
}

//This means that one or more of the redux states in the store are available as props
const mapStateToProps = (state: StateProps) => {
  return {
    isAuthenticated:
      state.auth.token !== null && typeof state.auth.token !== 'undefined',
    token: state.auth.token,
  };
};

//This means that one or more of the redux actions in the form of dispatch(action) combinations are available as props
const mapDispatchToProps = (dispatch: any) => {
  return {
    setAuthenticatedIfRequired: () => dispatch(actions.authCheckState()),
    logout: () => dispatch(actions.authLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
