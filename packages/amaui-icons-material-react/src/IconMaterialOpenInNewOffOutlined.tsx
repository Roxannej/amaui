import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOpenInNewOffOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInNewOffOutlined'
      short_name='OpenInNewOff'

      {...props}
    >
      <path d="M19.775 22.625 18.15 21Q18.15 21 18.15 21Q18.15 21 18.15 21H5Q4.175 21 3.587 20.413Q3 19.825 3 19V5.85Q3 5.85 3 5.85Q3 5.85 3 5.85L1.375 4.225L2.8 2.8L21.2 21.2ZM5 19H16.15L11.275 14.125L9.7 15.7L8.3 14.3L9.875 12.725L5 7.85V19Q5 19 5 19Q5 19 5 19ZM21 18.15 19 16.15V12H21ZM14.125 11.275 12.725 9.875 17.6 5H14V3H21V10H19V6.4ZM7.85 5 5.85 3H12V5Z"/>
    </Icon>
  )
});

export default IconMaterialOpenInNewOffOutlined;