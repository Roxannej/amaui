import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewInArSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewInArSharpW700Filled'
      short_name='ViewInAr'

      {...props}
    >
      <path d="M12 20.625 4.625 16.35V7.825L12 3.55L19.375 7.825V16.35ZM0.225 6V0.225H6V3H3V6ZM6 23.775H0.225V18H3V21H6ZM18 23.775V21H21V18H23.775V23.775ZM21 6V3H18V0.225H23.775V6ZM12 17 13 16.4V12.7L16.225 10.8V9.625L15.225 9.05L12 10.95L8.775 9.05L7.775 9.625V10.8L11 12.7V16.4Z"/>
    </Icon>
  )
});

export default IconMaterialViewInArSharpW700Filled;
