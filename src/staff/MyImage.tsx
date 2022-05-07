import React, { memo } from 'react';
import { useDelayNextChildren } from './hooks';

const MyImage = ({ delay, address }: any) =>
  useDelayNextChildren(
    <>
      Hello
      <img src={`http://localhost:8000${address}`} height="200px" />
    </>,
    delay
  );

export default memo(MyImage);
