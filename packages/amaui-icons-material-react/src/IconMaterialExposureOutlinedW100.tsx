import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExposureOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposureOutlinedW100'
      short_name='Exposure'

      {...props}
    >
      <path d="M5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7ZM6.4 8.1H10.6V7.4H6.4ZM5.8 19H18.2Q18.5 19 18.75 18.75Q19 18.5 19 18.2V5.8Q19 5.65 18.938 5.512Q18.875 5.375 18.75 5.25L5.25 18.75Q5.375 18.875 5.513 18.938Q5.65 19 5.8 19ZM14.9 17.6V15.6H12.9V14.9H14.9V12.9H15.6V14.9H17.6V15.6H15.6V17.6Z"/>
    </Icon>
  )
});

export default IconMaterialExposureOutlinedW100;
