import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMobileFriendlySharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileFriendlySharpW700'
      short_name='MobileFriendly'

      {...props}
    >
      <path d="M15.95 16.125 11.325 11.475 13.4 9.4 15.95 11.925 21.3 6.6 23.375 8.675ZM6.375 20.625H15.625V19.625H6.375ZM6.375 4.375H15.625V3.375H6.375ZM3.225 23.775V0.225H18.775V7H15.625V6.375H6.375V17.625H15.625V17H18.775V23.775ZM6.375 4.375V3.375V4.375ZM6.375 20.625V19.625V20.625Z"/>
    </Icon>
  )
});

export default IconMaterialMobileFriendlySharpW700;
