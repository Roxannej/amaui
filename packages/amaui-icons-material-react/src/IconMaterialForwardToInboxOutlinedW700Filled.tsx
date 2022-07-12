import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialForwardToInboxOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForwardToInboxOutlinedW700Filled'
      short_name='ForwardToInbox'

      {...props}
    >
      <path d="M19.375 23.95 17.65 22.2 18.975 20.85H15.125V18.35H18.975L17.625 17L19.375 15.25L23.725 19.6ZM4.3 20.85Q2.975 20.85 2.062 19.938Q1.15 19.025 1.15 17.7V6.3Q1.15 4.975 2.062 4.062Q2.975 3.15 4.3 3.15H19.7Q21.025 3.15 21.938 4.062Q22.85 4.975 22.85 6.3V14.9Q22.1 14.4 21.225 14.137Q20.35 13.875 19.45 13.875Q16.8 13.875 14.963 15.688Q13.125 17.5 13.125 20.15V20.85ZM12 14.075 19.7 9.075V6.3L12 11.3L4.3 6.3V9.075Z"/>
    </Icon>
  )
});

export default IconMaterialForwardToInboxOutlinedW700Filled;