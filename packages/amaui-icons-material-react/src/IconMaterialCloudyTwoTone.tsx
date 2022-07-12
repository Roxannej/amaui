import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCloudyTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudyTwoTone'
      short_name='Cloudy'

      {...props}
    >
      <path d="M6.65 20.625q-2.55 0-4.362-1.75Q.475 17.125.475 14.6q0-2.15 1.2-3.875T4.9 8.575q.75-2.35 2.7-3.775Q9.55 3.375 12 3.375q2.975 0 5.113 2.012 2.137 2.013 2.412 4.938v.075q1.75.4 2.875 1.837 1.125 1.438 1.125 3.263 0 2.125-1.487 3.625-1.488 1.5-3.638 1.5Z"/>
    </Icon>
  )
});

export default IconMaterialCloudyTwoTone;
