import { styled } from '@mui/material/styles';

export const Image = styled('img')({
  transition: '.1s ease-in-out',
  ':hover': {
    opacity: '0.85',
    filter: 'alpha(opacity=100)',
  },
});
