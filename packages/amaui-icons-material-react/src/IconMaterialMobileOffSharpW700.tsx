import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMobileOffSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileOffSharpW700'
      short_name='MobileOff'

      {...props}
    >
      <path d="M21.275 23.825 -0.025 2.55 1.65 0.875 22.925 22.175ZM4.225 5.15 7.375 8.3V17.625H16.725L19.775 20.675V23.775H4.225ZM7.375 19.625V20.625H16.625V19.625ZM19.775 0.225V16.15L16.625 13V6.375H9.95L5.1 1.55V0.225ZM7.925 4.375H16.625V3.375H7.925ZM7.375 19.625V20.625V19.625ZM7.925 4.375V3.375Z"/>
    </Icon>
  )
});

export default IconMaterialMobileOffSharpW700;
