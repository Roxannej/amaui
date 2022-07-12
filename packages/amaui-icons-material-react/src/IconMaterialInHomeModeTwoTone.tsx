import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialInHomeModeTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='InHomeModeTwoTone'
      short_name='InHomeMode'

      {...props}
    >
      <path d="M3.675 20.5V9.8H.4L12 .325 23.6 9.8h-3.275v1.7H17.3V8.575L12 4.225l-5.3 4.35v8.9h2.175V20.5Zm11.3 2.2-4.6-4.575L12.5 16l2.475 2.475L20.3 13.15l2.1 2.125Z"/>
    </Icon>
  )
});

export default IconMaterialInHomeModeTwoTone;
