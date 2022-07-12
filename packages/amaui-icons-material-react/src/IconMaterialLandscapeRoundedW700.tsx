import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLandscapeRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LandscapeRoundedW700'
      short_name='Landscape'

      {...props}
    >
      <path d="M3.375 18.375Q2.4 18.375 1.975 17.512Q1.55 16.65 2.125 15.875L5.75 11.025Q6.225 10.4 7 10.4Q7.775 10.4 8.25 11.025L11.425 15.225Q11.775 15.225 12.05 15.225Q12.325 15.225 12.675 15.225Q13.025 15.225 13.288 15.225Q13.55 15.225 13.9 15.225H17.475L14 10.625L12.225 13L10.25 10.35L12.75 7.025Q13.225 6.4 14 6.4Q14.775 6.4 15.25 7.025L21.875 15.875Q22.475 16.65 22.038 17.512Q21.6 18.375 20.625 18.375ZM13.9 15.225ZM6 15.225H8L7 13.875ZM6 15.225H7H8Z"/>
    </Icon>
  )
});

export default IconMaterialLandscapeRoundedW700;
