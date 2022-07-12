import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSdCardOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SdCardOutlinedW700Filled'
      short_name='SdCard'

      {...props}
    >
      <path d="M8.8 11.3H10.8V7.3H8.8ZM11.775 11.3H13.775V7.3H11.775ZM14.725 11.3H16.725V7.3H14.725ZM6.3 22.85Q4.975 22.85 4.062 21.938Q3.15 21.025 3.15 19.7V7.65L9.65 1.15H17.7Q19.025 1.15 19.938 2.062Q20.85 2.975 20.85 4.3V19.7Q20.85 21.025 19.938 21.938Q19.025 22.85 17.7 22.85Z"/>
    </Icon>
  )
});

export default IconMaterialSdCardOutlinedW700Filled;
