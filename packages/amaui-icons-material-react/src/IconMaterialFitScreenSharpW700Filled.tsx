import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFitScreenSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitScreenSharpW700Filled'
      short_name='FitScreen'

      {...props}
    >
      <path d="M20 9V6H17V3.225H22.775V9ZM1.225 9V3.225H7V6H4V9ZM17 20.775V18H20V15H22.775V20.775ZM1.225 20.775V15H4V18H7V20.775ZM6 16V8H18V16Z"/>
    </Icon>
  )
});

export default IconMaterialFitScreenSharpW700Filled;
