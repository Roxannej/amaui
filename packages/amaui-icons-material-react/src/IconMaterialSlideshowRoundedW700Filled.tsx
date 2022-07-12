import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSlideshowRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SlideshowRoundedW700Filled'
      short_name='Slideshow'

      {...props}
    >
      <path d="M11.75 15.3 14.775 13.325Q15.15 13.075 15.338 12.737Q15.525 12.4 15.525 12Q15.525 11.6 15.338 11.262Q15.15 10.925 14.775 10.675L11.75 8.7Q10.95 8.2 10.125 8.65Q9.3 9.1 9.3 10.025V13.975Q9.3 14.925 10.125 15.362Q10.95 15.8 11.75 15.3ZM5.3 21.85Q3.975 21.85 3.062 20.938Q2.15 20.025 2.15 18.7V5.3Q2.15 3.975 3.062 3.062Q3.975 2.15 5.3 2.15H18.7Q20.025 2.15 20.938 3.062Q21.85 3.975 21.85 5.3V18.7Q21.85 20.025 20.938 20.938Q20.025 21.85 18.7 21.85Z"/>
    </Icon>
  )
});

export default IconMaterialSlideshowRoundedW700Filled;
