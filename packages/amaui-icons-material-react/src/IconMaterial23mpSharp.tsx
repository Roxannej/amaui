import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial23mpSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='23mpSharp'
      short_name='23mp'

      {...props}
    >
      <path d="M6.5 11.5H11V10H8V9H11V5.5H6.5V7H9.5V8H6.5ZM13 11.5H17.5V5.5H13V7H16V8H14V9H16V10H13ZM3 21V3H21V21ZM5 19H19V5H5ZM6 18.5H7.5V14H8.5V17H10V14H11V18.5H12.5V12.5H6ZM13.5 18.5H15V17H18V12.5H13.5ZM15 14H16.5V15.5H15ZM5 5V19Z"/>
    </Icon>
  )
});

export default IconMaterial23mpSharp;
