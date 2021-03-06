import React from 'react';

import { Styles } from './styles';

import BackgroundServices from './BackgroundServices';
import ServiceDescription from './ServiceDescription';

export default function GardenStoragePage() {
  return (
    <Styles>
      <BackgroundServices />
      <ServiceDescription />
    </Styles>
  );
}
