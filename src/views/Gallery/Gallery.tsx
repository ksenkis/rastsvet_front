import React, { useEffect } from 'react';
import axios from 'axios';
import * as settings from '../../settings';
import { Typography, Grid } from '@mui/material';

import { Image } from './styled';

const Gallery = () => {
  let url = settings.API_SERVER + '/api/predict/image/';
  const [imagesMap, setImagesMap] = React.useState([]);

  useEffect(() => {
    axios.get(url).then((r) => {
      setImagesMap(r.data);
    });
  }, []);

  return (
    <>
      <Typography variant="h1" component="h1" mb={2} mt={8} textAlign="center">
        Наши работы
      </Typography>
      <Typography variant="h6" mb={8} textAlign="center">
        На данной странице представлены примеры работ сервиса Расцвет.
      </Typography>
      <Grid container justifyContent="center" rowSpacing={1} columnSpacing={2}>
        {imagesMap.map((item: any, idx) => (
          <Grid key={idx} item>
            <Image
              src={`http://localhost:8000/media/results/col_${item.image.slice(
                19
              )}`}
              sx={{ width: { xs: '100%', md: 369 } }}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Gallery;
