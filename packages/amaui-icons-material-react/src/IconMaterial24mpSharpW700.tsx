import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial24mpSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='24mpSharpW700'
      short_name='24mp'

      {...props}
    >
      <path d="M6.5 11.8H11V10.3H8V9.3H11V5.8H6.5V7.3H9.5V8.3H6.5ZM15.7 11.8H17.2V10.3H18.2V8.8H17.2V5.8H15.7V8.8H14.2V5.8H12.7V10.3H15.7ZM2.15 21.85V2.15H21.85V21.85ZM5.3 18.7H18.7V5.3H5.3ZM6 18.2H7.5V14H8.5V16.875H10V14H11V18.2H12.5V12.5H6ZM13.5 18.2H15V16.85H18V12.5H13.5ZM15 14H16.5V15.35H15ZM5.3 5.3V18.7Z"/>
    </Icon>
  )
});

export default IconMaterial24mpSharpW700;
