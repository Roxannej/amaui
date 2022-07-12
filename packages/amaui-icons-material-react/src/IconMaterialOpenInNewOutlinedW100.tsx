import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOpenInNewOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInNewOutlinedW100'
      short_name='OpenInNew'

      {...props}
    >
      <path d="M19.7 13V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7H5.8Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H11V5H5.8Q5.5 5 5.25 5.25Q5 5.5 5 5.8V18.2Q5 18.5 5.25 18.75Q5.5 19 5.8 19H18.2Q18.5 19 18.75 18.75Q19 18.5 19 18.2V13ZM9.75 14.75 9.25 14.25 18.5 5H14V4.3H19.7V10H19V5.5Z"/>
    </Icon>
  )
});

export default IconMaterialOpenInNewOutlinedW100;