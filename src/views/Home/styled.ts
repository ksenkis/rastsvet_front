import { styled } from '@mui/material/styles';
import { Card } from '@mui/material';

export const Section = styled('div')({
  height: 'calc(100vh - 150px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: 25,
});

export const SectionCenter = styled('div')({
  // height: 'calc(100vh - 130px)',
  display: 'flex',
  // alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  // marginTop: '11vh',
  marginBottom: '5vh',
});

export const Text = styled('div')({
  // width: '40vw',
});

export const Image = styled('img')({
  width: '30vw',
  //   marginLeft: '7vw',
});

export const Button = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  //   marginLeft: 10,
});

export const ButtonText = styled('div')({
  marginLeft: 6,
  marginTop: '1px',
});

export const Advantage = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  ':hover > div': {
    ':before': {
      left: '50%',
      right: '50%',
      transitionDuration: '0.2s',
    },
    ':after': {
      left: 0,
      right: 0,
    },
  },
});

export const Line = styled('div')({
  position: 'relative',
  maxWidth: '126px',
  width: '100px',
  height: '2px',
  margin: '20px auto 22px',
  '::before': {
    position: 'absolute',
    content: '""',
    height: '100%',
    left: '15px',
    right: '15px',
    background: '#d7d7d7',
    transition: 'all 0.3s ease',
    boxSizing: 'border-box',
  },
  '::after': {
    position: 'absolute',
    content: '""',
    height: '100%',
    left: '50%',
    right: '50%',
    background: '#f4df41',
    transition: 'all 0.3s ease',
    boxSizing: 'border-box',
  },
});

export const ImageGallery = styled('img')({
  // width: '25vw',
  // height: '40vh',
  width: '100%',
  transition: '.3s ease-in-out',
  ':hover': {
    opacity: '0.85',
    filter: 'alpha(opacity=100)',
  },
});
