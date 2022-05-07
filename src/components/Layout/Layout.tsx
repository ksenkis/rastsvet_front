import React from 'react';
import TopBar from '../TopBar/TopBar';
import Footer from '../Footer/Footer';
import CssBaseline from '@mui/material/CssBaseline';

import { Wrapper, Content } from './styled';
import { LayoutProps } from './types';

function Layout(props: LayoutProps) {
  return (
    <React.Fragment>
      <CssBaseline />
      <TopBar {...props} />
      <Wrapper>
        <Content>{props.children}</Content>
      </Wrapper>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
