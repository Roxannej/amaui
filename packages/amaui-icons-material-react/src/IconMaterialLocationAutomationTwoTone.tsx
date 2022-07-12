import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocationAutomationTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationAutomationTwoTone'
      short_name='LocationAutomation'

      {...props}
    >
      <path d="M3.375 19.625V6.675L12 0.175L20.625 6.65V10.475H17.6V8.175L12 3.975L6.4 8.175V16.6H11.5V19.625ZM18.5 23.25 16.7 19.3 12.75 17.5 16.7 15.7 18.5 11.75 20.3 15.7 24.25 17.5 20.3 19.3Z"/>
    </Icon>
  )
});

export default IconMaterialLocationAutomationTwoTone;
