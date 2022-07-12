import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial10mpSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='10mpSharpW700'
      short_name='10mp'

      {...props}
    >
      <path d="M8.5 11.8H10V5.8H7V7.3H8.5ZM12 11.8H16.5V5.8H12ZM13.5 10.3V7.3H15V10.3ZM2.15 21.85V2.15H21.85V21.85ZM5.3 18.7H18.7V5.3H5.3ZM6 18.2H7.5V14H8.5V16.875H10V14H11V18.2H12.5V12.5H6ZM13.5 18.2H15V16.85H18V12.5H13.5ZM15 14H16.5V15.35H15ZM5.3 5.3V18.7Z"/>
    </Icon>
  )
});

export default IconMaterial10mpSharpW700;
