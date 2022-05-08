import { styled } from '@mui/material/styles';
import { TextField, Button } from '@mui/material';

export const Wrapper = styled('div')({
  marginTop: '10vh',
  overflow: 'auto',
});

export const ImageForm = styled('div')({
  display: 'flex',
});

export const ImageName = styled(TextField)({
  marginRight: 60,
});

export const SubmitButton = styled(Button)({
  marginTop: 40,
});

export const SubmitSection = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

export const SubmitImage = styled('img')({
  marginLeft: '10vw',
});

export const Arrow = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '3vw',
});

export const Results = styled('div')({
  borderTop: '1px solid #C6C6C6',
  //посмотреть
  marginTop: 64,
});

export const OriginalImage = styled('img')({
  width: 369,
});

export const ResultImage = styled('img')({});
