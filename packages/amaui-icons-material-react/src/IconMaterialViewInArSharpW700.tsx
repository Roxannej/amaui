import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewInArSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewInArSharpW700'
      short_name='ViewInAr'

      {...props}
    >
      <path d="M12 20.625 4.625 16.35V7.825L12 3.55L19.375 7.825V16.35ZM11 16.4V12.7L7.775 10.8V14.525ZM13 16.4 16.225 14.525V10.8L13 12.7ZM0.225 6V0.225H6V3H3V6ZM6 23.775H0.225V18H3V21H6ZM18 23.775V21H21V18H23.775V23.775ZM21 6V3H18V0.225H23.775V6ZM12 10.95 15.225 9.05 12 7.175 8.775 9.05ZM12 12.7ZM12 10.95ZM13 12.7ZM11 12.7Z"/>
    </Icon>
  )
});

export default IconMaterialViewInArSharpW700;
