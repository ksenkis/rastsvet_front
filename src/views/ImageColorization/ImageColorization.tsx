import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Input, Typography, Grid } from '@mui/material';
import * as settings from '../../settings';
import axios from 'axios';
import MyImage from '../../components/MyImage';
import { PhotoCamera } from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import sunburst from '../../images/sunburst.png';
import {
  ImageForm,
  ImageName,
  SubmitButton,
  OriginalImage,
  ResultImage,
  Wrapper,
  Results,
  Images,
  SubmitSection,
  SubmitImage,
  Arrow,
} from './styled';

const ImageColorization = () => {
  const [state, setState] = useState({ title: '', image: undefined });
  const [prediction, setPrediction] = React.useState(null);
  const [prediction1, setPrediction1] = React.useState(prediction);
  const [myTime, setMyTime] = React.useState(undefined);

  const handleChange = (e: any) => {
    setState({
      title: e.target.value,
      image: state.image,
    });
  };

  const handleImageChange = (e: any) => {
    setState({
      title: state.title,
      image: e.target.files[0],
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let form_data = new FormData();
    //@ts-ignore
    form_data.append('image', state.image, state.image.name);
    form_data.append('title', state.title);
    let url = settings.API_SERVER + '/api/predict/image/';
    axios
      .post(url, form_data, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      })
      .then((res) => {
        // console.log(res.data);
        setPrediction(res.data.image);
        setPrediction1(res.data.image.slice(19));
        //@ts-ignore
        setMyTime(1000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Wrapper>
      <CssBaseline />
      <>
        <SubmitSection sx={{ height: { xs: '70vh', md: '66vh' } }}>
          <div>
            <Typography variant="h1" component="h1" mb={5} mt={2}>
              Раскраска изображения
            </Typography>
            <form onSubmit={handleSubmit}>
              <ImageForm sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
                <ImageName
                  id="standard-basic title"
                  label="Название"
                  variant="standard"
                  type="text"
                  value={state.title}
                  onChange={handleChange}
                  required
                  sx={{ mb: { xs: 5, md: 0 } }}
                />
                <Input
                  inputProps={{ accept: 'image/png, image/jpeg' }}
                  id="image"
                  type="file"
                  onChange={handleImageChange}
                  required
                  name="myfile1"
                />
              </ImageForm>
              <SubmitButton variant="contained" color="primary" type="submit">
                Загрузить
              </SubmitButton>
            </form>
          </div>
          <SubmitImage
            src={sunburst}
            width="35%"
            sx={{ display: { xs: 'none', md: 'block' } }}
          />
        </SubmitSection>
        {myTime && prediction && (
          <>
            <Arrow>
              <KeyboardArrowDownIcon
                sx={{ fontSize: 60, color: '#6b9b37', mt: -3 }}
              />
            </Arrow>
            <Results>
              <Typography
                variant="h2"
                component="h2"
                mb={8}
                mt={8}
                textAlign="center"
              >
                Результаты
              </Typography>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                columnSpacing={20}
                rowSpacing={2}
                sx={{ mb: 4 }}
              >
                <Grid key={0} item>
                  <OriginalImage
                    src={`http://localhost:8000${prediction}`}
                    sx={{ width: { xs: '100%', md: 450 } }}
                  />
                </Grid>
                <Grid key={1} item>
                  <ResultImage
                    src={`http://localhost:8000/media/results/res_${prediction1}`}
                    sx={{ width: { xs: '100%', md: 450 } }}
                  />
                </Grid>
              </Grid>
            </Results>
          </>
        )}
      </>
    </Wrapper>
  );
};

export default ImageColorization;
