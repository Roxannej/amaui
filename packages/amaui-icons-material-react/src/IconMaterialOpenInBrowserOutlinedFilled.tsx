import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOpenInBrowserOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInBrowserOutlinedFilled'
      short_name='OpenInBrowser'

      {...props}
    >
      <path d="M11 21V14.85L9.4 16.45L8 15L12 11L16 15L14.6 16.45L13 14.85V21ZM15 19H19Q19 19 19 19Q19 19 19 19V7H5V19Q5 19 5 19Q5 19 5 19H9V21H5Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21H15Z"/>
    </Icon>
  )
});

export default IconMaterialOpenInBrowserOutlinedFilled;