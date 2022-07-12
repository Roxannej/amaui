import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOpenInBrowserOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInBrowserOutlinedW100Filled'
      short_name='OpenInBrowser'

      {...props}
    >
      <path d="M11.65 19.7V13.35L9.4 15.6L8.9 15.1L12 12L15.1 15.1L14.6 15.6L12.35 13.35V19.7ZM15.35 19H18.2Q18.5 19 18.75 18.75Q19 18.5 19 18.2V7H5V18.2Q5 18.5 5.25 18.75Q5.5 19 5.8 19H8.65V19.7H5.8Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7H15.35Z"/>
    </Icon>
  )
});

export default IconMaterialOpenInBrowserOutlinedW100Filled;
