import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Carousel } from 'react-responsive-carousel';
import { ListComponent } from './CircleListFrame';
import { CircleSlideCard } from './CircleSlideCard';

export const CircleSlider: ListComponent = observer(() => {
  const [config] = useState({
    infiniteLoop: true,
    autoPlay: false,
    // XXX: swipe 이후 자동으로 움직이는 버그가 있음
    // https://github.com/leandrowd/react-responsive-carousel/issues/621
    interval: 24 * 60 * 60 * 1000,
    showThumbs: false,
    showArrows: false,
    showStatus: false,
    showIndicators: false,
    useKeyboardArrows: false,
    centerMode: true,
    centerSlidePercentage: 80,
  });

  return (
    <Carousel {...config}>
      <CircleSlideCard />
      <CircleSlideCard />
      <CircleSlideCard />
    </Carousel>
  );
});
