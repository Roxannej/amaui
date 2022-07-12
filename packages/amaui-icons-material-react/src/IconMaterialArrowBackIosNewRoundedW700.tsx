import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowBackIosNewRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowBackIosNewRoundedW700'
      short_name='ArrowBackIosNew'

      {...props}
    >
      <path d="M14.75 21.5 6.325 13.1Q6.1 12.875 6 12.587Q5.9 12.3 5.9 12Q5.9 11.7 6 11.412Q6.1 11.125 6.325 10.9L14.75 2.475Q15.275 1.95 16.038 1.937Q16.8 1.925 17.35 2.475Q17.875 3 17.875 3.762Q17.875 4.525 17.35 5.05L10.4 12L17.35 18.95Q17.875 19.475 17.875 20.212Q17.875 20.95 17.325 21.5Q16.8 22.025 16.038 22.025Q15.275 22.025 14.75 21.5Z"/>
    </Icon>
  )
});

export default IconMaterialArrowBackIosNewRoundedW700;
