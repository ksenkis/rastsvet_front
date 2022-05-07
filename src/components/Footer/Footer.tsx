import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import { Wrapper } from './styled';

function Footer() {
  return (
    <Wrapper>
      <Typography variant="body2" color="textSecondary" align="center">
        {'© '}
        <Link color="inherit" href="http://localhost:3000/">
          Расцвет
        </Link>{' '}
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        Малчевская Ксения, {new Date().getFullYear()}
      </Typography>
    </Wrapper>
  );
}
export default Footer;
