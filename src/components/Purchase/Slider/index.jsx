import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Slider = () => (
  <AutoPlaySwipeableViews>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </AutoPlaySwipeableViews>
);

export default Slider;