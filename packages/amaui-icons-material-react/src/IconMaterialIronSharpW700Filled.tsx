import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialIronSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='IronSharpW700Filled'
      short_name='Iron'

      {...props}
    >
      <path d="M1.125 18.775V15.375Q1.125 13.475 2.463 12.137Q3.8 10.8 5.7 10.8H13.95V9.375H9.1V10H5.95V6.225H17.1V13.225H18.1V5.225H22.85V8.375H21.25V16.375H17.1V18.775Z"/>
    </Icon>
  )
});

export default IconMaterialIronSharpW700Filled;
