import React, { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import axios from 'axios';
import { Grid, Typography, Fab } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MoneyOffOutlinedIcon from '@mui/icons-material/MoneyOffOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';

import * as settings from '../../settings';
import photoBoy from '../../images/photoBoy.png';
import algorithm from '../../images/algorithm.png';
import { ImageItem } from '../../types';
import {
  Section,
  Text,
  Image,
  Button,
  ButtonText,
  SectionCenter,
  Advantage,
  Line,
  ImageGallery,
} from './styled';

function Home() {
  const handleRedirect = () => {
    window.location.assign(`http://localhost:3000/image/`);
  };

  const handleRedirectToAlgorithm = () => {
    window.location.assign(`http://localhost:3000/algorithm/`);
  };

  const handleRedirectToGallery = () => {
    window.location.assign(`http://localhost:3000/gallery/`);
  };

  let url = settings.API_SERVER + '/api/predict/image/';
  const [imagesMap, setImagesMap] = React.useState([]);
  const [slider, setSlider] = React.useState([]);

  useEffect(() => {
    axios.get(url).then((r) => {
      setImagesMap(r.data.slice(-5));
      setSlider(r.data.slice(-2));
    });
  }, []);

  const handleForwardClick = () => {
    imagesMap.map((item, idx) => {
      if (slider[1] === imagesMap[4]) {
        setSlider([imagesMap[4], imagesMap[0]]);
      } else if (slider[1] === imagesMap[idx]) {
        setSlider([imagesMap[idx], imagesMap[idx + 1]]);
      }
    });
  };

  const handleBackClick = () => {
    imagesMap.map((item, idx) => {
      if (slider[0] === imagesMap[0]) {
        setSlider([imagesMap[4], imagesMap[0]]);
      } else if (slider[0] === imagesMap[idx]) {
        setSlider([imagesMap[idx - 1], imagesMap[idx]]);
      }
    });
  };

  return (
    <>
      <CssBaseline />
      <Section>
        <Text sx={{ width: { xs: '100%', md: '40vw' } }}>
          <Typography variant="h2" component="h2" mb={5} textAlign="justify">
            Онлайн перевод фото из черно-белых в цветные
          </Typography>
          <Typography variant="body1" mb={1}>
            Придать цвет любому фото онлайн за пару кликов.
          </Typography>
          <Typography variant="body1" mb={1} textAlign="justify">
            Разбирая старые фотоальбомы, Вы наткнулись на черно-белые фото и
            хотите обновить их, дать новую жизнь? Вам интересна репродукция
            старинных фотогорафий городов и пейзажей? Или, может, вы просто
            экпериментируете с фото?
          </Typography>
          <Typography variant="body1" textAlign="justify">
            Наш сервис Расцвет поможет Вам во всех этих и других ситуациях,
            когда необходимо быстрое, бесплатное и качественное раскрашивание
            фото.
          </Typography>
          <Button>
            <Fab
              variant="extended"
              size="small"
              color="primary"
              sx={{ mt: 6 }}
              onClick={handleRedirect}
            >
              <ButtonText>Раскрасить изображение</ButtonText>
              <ArrowForwardIosIcon sx={{ ml: 1, fontSize: 16 }} />
            </Fab>
          </Button>
        </Text>
        <Image src={photoBoy} sx={{ display: { xs: 'none', md: 'block' } }} />
      </Section>
      <Section>
        <Image src={algorithm} sx={{ display: { xs: 'none', md: 'block' } }} />
        <Text>
          <Typography variant="h2" component="h2" mb={5} textAlign="justify">
            Как это работает?
          </Typography>
          <Typography variant="body1" mb={1}>
            Вы просто загружаете фото, которому хотите придать цвет.
          </Typography>
          <Typography variant="body1" mb={1} textAlign="justify">
            В это время начинает свою работу Искусственный интеллект, встроенный
            в наш сервис. Он обитает на специально отведенном сервере и не
            расходует ресурсы компьютера пользователя, позволяя проводить
            перевод из черно-белого изображения в цветное в считанные секунды!
          </Typography>
          <Typography variant="body1" textAlign="justify">
            В итоге Вы получаете готовое цветное изображение, можете сохранить
            его себе на устройство и раскрасить еще несколько)
          </Typography>
          <Button>
            <Fab
              variant="extended"
              size="small"
              color="primary"
              sx={{ mt: 6 }}
              onClick={handleRedirectToAlgorithm}
            >
              <ButtonText>Узнать больше</ButtonText>
              <ArrowForwardIosIcon sx={{ ml: 1, fontSize: 16 }} />
            </Fab>
          </Button>
        </Text>
      </Section>
      <SectionCenter>
        <Typography
          variant="h1"
          component="h1"
          mb={8}
          mt={9}
          textAlign="center"
        >
          Наши преимущества
        </Typography>
        <Grid
          container
          justifyContent="space-around"
          flexWrap="wrap"
          spacing={4}
        >
          <Grid key={0} item>
            <Advantage
              variant="outlined"
              sx={{
                width: { xs: '100%', md: 315 },
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
              }}
            >
              <AccessTimeIcon sx={{ fontSize: 46, mt: 3, color: '#6b9b37' }} />
              <Typography variant="h3" component="h3" mt={5} mb={2}>
                Быстро
              </Typography>
              <Line />
              <Typography
                variant="body1"
                mb={3}
                mr={3}
                ml={3}
                textAlign="center"
              >
                Раскрашивание изображения на нашем сервисе осуществляется всего
                за несолько секунд. Обработка изображения происходит на сервере,
                что и позволяет достичь такой скорости работы.
              </Typography>
            </Advantage>
          </Grid>
          <Grid key={1} item>
            <Advantage
              variant="outlined"
              sx={{
                width: { xs: '100%', md: 315 },
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
              }}
            >
              <MoneyOffOutlinedIcon
                sx={{ fontSize: 46, mt: 3, color: '#6b9b37' }}
              />
              <Typography variant="h3" component="h3" mt={5} mb={2}>
                Бесплатно
              </Typography>
              <Line />
              <Typography
                variant="body1"
                mb={3}
                mr={3}
                ml={3}
                textAlign="center"
              >
                Сервис Расцвет совершенно бесплатен, позволить обработку
                фотографий на нем может позволить себе любой. Количество
                раскрашиваемых изображений также не ограничено.
              </Typography>
            </Advantage>
          </Grid>
          <Grid key={2} item>
            <Advantage
              variant="outlined"
              sx={{
                width: { xs: '100%', md: 315 },
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
              }}
            >
              <AutoFixHighOutlinedIcon
                sx={{ fontSize: 46, mt: 3, color: '#6b9b37' }}
              />
              <Typography variant="h3" component="h3" mt={5} mb={2}>
                Легко
              </Typography>
              <Line />
              <Typography
                variant="body1"
                mb={3}
                mr={3}
                ml={3}
                textAlign="center"
              >
                Для работы с нашим сервисом не требуются познания ни в области
                обработки изображений, ни в области программирования. Перевести
                изображение из черно-белого в цветное можно всего в пару кликов.
              </Typography>
            </Advantage>
          </Grid>
        </Grid>
      </SectionCenter>
      <SectionCenter>
        <Typography
          variant="h1"
          component="h1"
          mt={17}
          mb={8}
          textAlign="center"
        >
          Галерея
        </Typography>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <ArrowBackIosOutlinedIcon
            onClick={handleBackClick}
            sx={{
              fontSize: 36,
              display: { xs: 'none', md: 'block' },
              transition: '.1s ease-in-out',
              ':hover': { opacity: '0.65', filter: 'alpha(opacity=100)' },
            }}
          />
          {slider.map((item: ImageItem, idx) => (
            <Grid key={idx} item>
              <ImageGallery
                src={`http://localhost:8000/media/results/col_${item.image.slice(
                  19
                )}`}
              />
            </Grid>
          ))}
          <ArrowForwardIosIcon
            onClick={handleForwardClick}
            sx={{
              fontSize: 36,
              display: { xs: 'none', md: 'block' },
              transition: '.1s ease-in-out',
              ':hover': { opacity: '0.65', filter: 'alpha(opacity=100)' },
            }}
          />
        </Grid>
        <Button>
          <Fab
            variant="extended"
            size="small"
            color="primary"
            sx={{ mt: 3, display: { xs: 'flex', md: 'none' } }}
            onClick={handleRedirectToGallery}
          >
            <ButtonText>Смотреть все</ButtonText>
            <ArrowForwardIosIcon sx={{ ml: 1, fontSize: 16 }} />
          </Fab>
        </Button>
      </SectionCenter>
    </>
  );
}

export default Home;
