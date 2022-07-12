import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSendRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendRoundedW700Filled'
      short_name='Send'

      {...props}
    >
      <path d="M4.425 19.875Q3.65 20.225 2.938 19.75Q2.225 19.275 2.225 18.425V15.875Q2.225 15.35 2.538 14.938Q2.85 14.525 3.35 14.375L11.375 12L3.35 9.625Q2.85 9.475 2.538 9.062Q2.225 8.65 2.225 8.125V5.575Q2.225 4.725 2.938 4.25Q3.65 3.775 4.425 4.125L19.575 10.55Q20.525 10.975 20.525 12Q20.525 13.025 19.575 13.45Z"/>
    </Icon>
  )
});

export default IconMaterialSendRoundedW700Filled;
