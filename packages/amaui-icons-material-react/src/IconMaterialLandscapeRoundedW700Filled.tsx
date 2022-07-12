import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLandscapeRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LandscapeRoundedW700Filled'
      short_name='Landscape'

      {...props}
    >
      <path d="M3.375 18.375Q2.4 18.375 1.975 17.512Q1.55 16.65 2.125 15.875L5.75 11.025Q6.225 10.4 7 10.4Q7.775 10.4 8.25 11.025L10.825 14.425Q11.075 14.775 11.488 14.838Q11.9 14.9 12.225 14.625Q12.525 14.375 12.613 14Q12.7 13.625 12.475 13.325L10.25 10.35L12.75 7.025Q13.225 6.4 14 6.4Q14.775 6.4 15.25 7.025L21.875 15.875Q22.475 16.65 22.038 17.512Q21.6 18.375 20.625 18.375Z"/>
    </Icon>
  )
});

export default IconMaterialLandscapeRoundedW700Filled;
