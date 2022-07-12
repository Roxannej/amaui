import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSdCardSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SdCardSharpW700Filled'
      short_name='SdCard'

      {...props}
    >
      <path d="M8.8 11.3H10.8V7.3H8.8ZM11.775 11.3H13.775V7.3H11.775ZM14.725 11.3H16.725V7.3H14.725ZM3.15 22.85V7.65L9.65 1.15H20.85V22.85Z"/>
    </Icon>
  )
});

export default IconMaterialSdCardSharpW700Filled;
