import React from 'react';
import { Typography } from '@mui/material';

import rgb from '../../images/rgb.jpeg';
import lab from '../../images/lab.jpeg';
import gan from '../../images/gan.jpeg';
import l1 from '../../images/l1.jpeg';
import combined from '../../images/combined.jpeg';
import { CenterImage } from './styled';

const Algorithm = () => {
  return (
    <>
      <Typography variant="h1" component="h1" mb={5} mt={8} textAlign="center">
        Как работает сам алгоритм
      </Typography>
      <Typography variant="body1" textAlign="justify">
        Для пользователя нашего сервиса проходит всего несколько секунд, прежде
        чем он получит итоговое раскрашенное изображение. Но за данным процессом
        стоит сложный алгоритм, отвечающий за перевод черно-белой фотографии в
        цветную. В данном разделе мы рассказываем об особенностях работы самого
        алгоритма машинного обучения. Далее мы погрузим Вас в теорию обработки
        изображений и работы нейросетей.
      </Typography>
      <Typography variant="h3" component="h3" mb={3} mt={5}>
        Сравнение цветовых пространств RGB И L*a*b
      </Typography>
      <Typography variant="body1" textAlign="justify">
        Когда мы загружаем изображение, получаем массив, содержащий в себе 3
        параметра: высоту, ширину, цвет. Данные о цвете нашего изображения
        хранятся в последнем элементе массива. Эти данные представляют цвет в
        цветовом пространстве RGB, и для каждого пикселя есть 3 числа,
        указывающие, сколько красного, зеленого и синего в пикселе. На следующем
        изображении Вы можете видеть, что в левой части “основного изображения”
        (крайнее левое изображение) у нас синий цвет, поэтому в синем канале
        изображения эта часть имеет более высокие значения и стала темной.
      </Typography>
      <img src={rgb} width="100%" />
      <Typography variant="body1" textAlign="justify">
        В цветовом пространстве L * a * b у нас снова есть три числа для каждого
        пикселя, но эти числа имеют разные значения. Первое число (канал), L,
        кодирует яркость каждого пикселя, и когда мы визуализируем этот канал
        (второе изображение в строке ниже), он отображается как черно-белое
        изображение. Каналы *a и *b кодируют, сколько зелено-красного и
        желто-синего в каждом пикселе соответственно. На следующем изображении
        вы можете видеть каждый канал цветового пространства L * a * b отдельно.
      </Typography>
      <img src={lab} width="100%" />
      <Typography variant="body1" textAlign="justify">
        При реализации алгоритма машинного обучения применяется подход,
        использующий цветовое пространство CIELAB вместо привычного RGB.
        Пространство LAB однозначно определяет цвет, кроме того изменения цвета
        в нем является более линейным с точки зрения человеческого восприятия.
        Использование данного цветового пространства позволяет модели машинного
        обучения предсказывать только два параметра – a и b, так как яркость
        берется из изначального черно-белого изображения. Данный подход
        существенно повышает точность алгоритма.
      </Typography>
      <Typography variant="h3" component="h3" mb={3} mt={5}>
        Решение проблемы колоризации
      </Typography>
      <Typography variant="body1" textAlign="justify">
        Идея перевода изображения с помощью условных состязательных сетей статья
        позволяет предложить общее решение многих задач преобразования
        изображений в глубоком обучении, одной из которых является задача
        раскрашивания. В этом подходе используются две потери: потеря L1, что
        делает ее задачей регрессии, и потеря состязательности (GAN), которая
        помогает решить проблему неконтролируемым образом (путем присвоения
        выходным данным числа, указывающего, насколько “реальными” они
        выглядят).
      </Typography>
      <Typography variant="h4" component="h4" mb={3} mt={5}>
        Особенности GAN
      </Typography>
      <Typography variant="body1" textAlign="justify" mb={2}>
        Как упоминалось ранее, мы строим условную GAN - Generative Adversarial
        Network (генеративно-состязательную нейросеть) и используем
        дополнительную функцию потерь, L1 loss. Давайте начнем с GAN. В GAN есть
        генератор и дискриминаторная модель, которые учатся решать проблему
        вместе. В нашей настройке модель генератора принимает изображение в
        оттенках серого (1-канальное изображение) и создает 2-канальное
        изображение, канал для * a и другой для * b. Дискриминатор берет эти два
        созданных канала и объединяет их с входным изображением в оттенках
        серого и решает, является ли это новое 3-канальное изображение
        поддельным или реальным. Конечно, дискриминатор также должен видеть
        некоторые реальные изображения (3-канальные изображения снова в цветовом
        пространстве лаборатории), которые не создаются генератором, и должен
        узнать, что они реальны. То изображение в оттенках серого, которое видят
        как генератор, так и дискриминатор, является условием, которое мы
        предоставляем обеим моделям в нашей GAN, и ожидаем, что они примут это
        условие во внимание. Взглянем на математику. Рассмотрим x как
        изображение в оттенках серого, z как входной шум для генератора и y как
        2-канальный выходной сигнал, который мы хотим получить от генератора (он
        также может представлять 2 цветовых канала реального изображения). Кроме
        того, G - это модель генератора, а D - дискриминатор. Тогда потеря для
        нашей условной GAN будет:
      </Typography>
      <CenterImage>
        <img src={gan} width="60%" />
      </CenterImage>
      <Typography variant="body1" textAlign="justify" mt={2}>
        Обратите внимание, что x задается обеим моделям, что является условием,
        при котором мы вводим двух игроков в эту игру. На самом деле, мы не
        собираемся подавать “n”-мерный вектор случайного шума в генератор, шум
        вводится в виде выпадающих слоев в архитектуре генератора.
      </Typography>
      <Typography variant="h4" component="h4" mb={3} mt={5}>
        Функция потерь
      </Typography>
      <Typography variant="body1" textAlign="justify" mb={2}>
        Более ранняя функция потерь помогает создавать красивые красочные
        изображения, которые кажутся реальными, но чтобы еще больше помочь
        моделям и внести некоторый контроль в нашу задачу, мы объединяем эту
        функцию потерь с потерей L1 (вы можете знать потерю L1 как среднюю
        абсолютную ошибку) прогнозируемых цветов по сравнению с фактическими
        цветами:
      </Typography>
      <CenterImage>
        <img src={l1} width="60%" />
      </CenterImage>
      <Typography variant="body1" textAlign="justify" mt={2} mb={2}>
        Если мы используем только потерю L1, модель все равно научится
        раскрашивать изображения, но она будет консервативной и большую часть
        времени использует такие цвета, как “серый” или “коричневый”, потому
        что, когда она сомневается, какой цвет лучше, она берет среднее значение
        и использует эти цвета, чтобы максимально уменьшить потерю L1 насколько
        это возможно (это похоже на эффект размытия потери L1 или L2 в задаче
        сверхразрешения). Кроме того, потеря L1 предпочтительнее потери L2 (или
        среднеквадратичной ошибки), поскольку она уменьшает эффект получения
        сероватых изображений. Итак, наша комбинированная функция потерь будет
        равна, где λ - коэффициент, уравновешивающий вклад двух потерь в
        конечную потерю (потеря дискриминатора не связана с потерей L1):
      </Typography>
      <CenterImage>
        <img src={combined} width="60%" />
      </CenterImage>
    </>
  );
};

export default Algorithm;
