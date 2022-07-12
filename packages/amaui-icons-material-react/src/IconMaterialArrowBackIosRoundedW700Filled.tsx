import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowBackIosRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowBackIosRoundedW700Filled'
      short_name='ArrowBackIos'

      {...props}
    >
      <path d="M9.525 21.5 1.1 13.1Q0.875 12.875 0.762 12.587Q0.65 12.3 0.65 12Q0.65 11.7 0.762 11.412Q0.875 11.125 1.1 10.9L9.525 2.475Q10.05 1.95 10.8 1.937Q11.55 1.925 12.1 2.475Q12.625 3 12.625 3.762Q12.625 4.525 12.1 5.05L5.15 12L12.1 18.95Q12.625 19.475 12.637 20.212Q12.65 20.95 12.1 21.5Q11.575 22.025 10.812 22.025Q10.05 22.025 9.525 21.5Z"/>
    </Icon>
  )
});

export default IconMaterialArrowBackIosRoundedW700Filled;
