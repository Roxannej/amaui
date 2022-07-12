import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRMobiledataOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RMobiledataOutlined'
      short_name='RMobiledata'

      {...props}
    >
      <path d="M2 10V2H7Q7.825 2 8.412 2.587Q9 3.175 9 4V5.35Q9 5.95 8.65 6.438Q8.3 6.925 7.8 7.2L9 10H7L5.85 7.35H4V10ZM4 5.35H7Q7 5.35 7 5.35Q7 5.35 7 5.35V4Q7 4 7 4Q7 4 7 4H4Z"/>
    </Icon>
  )
});

export default IconMaterialRMobiledataOutlined;
